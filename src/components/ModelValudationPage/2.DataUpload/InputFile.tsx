/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useRef, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { selectForm } from 'redux/slices/formSlice';
import { selectEventDefination } from 'redux/slices/eventDefinationSlice';
import { selectModelName } from 'redux/slices/modelNameSlice';
import { selectuuid } from 'redux/slices/uuidSlice';
import { selectKpi } from 'redux/slices/KPISlice';
import { Data as DataModel, TestName } from 'Data/KPI-page1';
import { PROFILE_DATA_URL } from 'API/api';
import { response as responseSample, CharacterDataType, NumericDataType } from 'Data/response';
import { populateData } from 'redux/slices/responseDataSlice';

const useStyles = makeStyles({
  root: { fontFamily: 'Roboto' },
  hide: {
    display: 'none',
  },
  file: {
    padding: '.5rem',
    border: '3px solid grey',
    borderRadius: '1rem',
    '& .MuiTypography-root': {
      padding: '.5rem',
    },
  },
});

const InputCSV = (): JSX.Element => {
  const developmentFileRef = useRef<HTMLInputElement>(null);
  const validationFileRef = useRef<HTMLInputElement>(null);
  const formState = useSelector(selectForm);
  const eventDefination = useSelector(selectEventDefination);
  const modelName = useSelector(selectModelName);
  const KEY = useSelector(selectuuid);
  const kpi = useSelector(selectKpi);
  const dispatch = useDispatch();

  const [devFile, setDevFile] = useState<Blob>();
  const [devFileName, setDevFileName] = useState<string>('Choose a development(Train) file');
  const [valFile, setValFile] = useState<Blob>();
  const [valFileName, setValFileName] = useState<string>('Choose a validation(Test) file');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, fileName: string) => {
    const file = event.target.files![0];
    if (file) {
      if (fileName === 'development file') {
        setDevFile(file);
        setDevFileName(`Development File: ${file.name}`);
      } else if (fileName === 'validation file') {
        setValFile(file);
        setValFileName(`Validation File: ${file.name}`);
      }
    }
  };

  const getFormData = () => {
    return { ...formState, eventDefination, modelName };
  };

  // prepating the KPI data to be send
  const getKpiData = () => {
    const kpiData = Object.entries(kpi).map(([keyName, data]) => {
      const newArray = data.filter((node) => node.selected === true).map((node) => node.testName);
      return { test: keyName, data: newArray };
    });
    return kpiData;
  };

  const prepareResponse = (responseData: any) => {
    const { DA_Num_Test, DA_Num_Train, DA_Char_Test, DA_Char_Train } = responseData;

    const characterData: CharacterDataType[] = DA_Char_Test.Data.map((element: any, index: number) => {
      const trainData = DA_Char_Train.Data[index];
      const testData = DA_Char_Test.Data[index];
      const temp: CharacterDataType = {
        variableName: testData.VAR_NAME,
        test: {
          n: testData.TOTAL_OBS,
          missing: testData.MISSING_PERCENT,
          distinctCatergories: testData.DISTINCT_CATEGORIES,
        },
        train: {
          n: trainData.TOTAL_OBS,
          missing: trainData.MISSING_PERCENT,
          distinctCatergories: trainData.DISTINCT_CATEGORIES,
        },
      };
      return temp;
    });

    const numericData: NumericDataType[] = DA_Num_Test.Data.map((element: any, index: number) => {
      const trainData = DA_Num_Train.Data[index];
      const testData = DA_Num_Test.Data[index];
      const temp: NumericDataType = {
        variableName: testData.VAR_NAME,
        test: {
          n: testData.TOTAL_OBS,
          missing: testData.MISSING_PERCENT,
          deviation: testData.STD_DEV,
          mean: testData.MEAN,
        },
        train: {
          n: trainData.TOTAL_OBS,
          missing: trainData.MISSING_PERCENT,
          deviation: testData.STD_DEV,
          mean: trainData.MEAN,
        },
      };
      return temp;
    });
    dispatch(populateData({ numericData, characterData }));
  };

  const handleOnSumbit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (devFile || valFile) {
      const formData = new FormData();
      //  not null assertion
      formData.append('development-file', devFile!);
      formData.append('validation-file', valFile!);
      formData.append('form-data', JSON.stringify(getFormData()));
      formData.append('requested-kpi', JSON.stringify(getKpiData()));
      formData.append('uuid', KEY);

      console.log(Array.from(formData));

      // // @ts-ignore
      // for (const pair of formData.entries()) {
      //   console.log(`${pair[0]}, ${pair[1]}`);
      // }

      try {
        const responseData = await axios.post(PROFILE_DATA_URL, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(responseData);

        // if (responseData.uuid !== KEY) {
        const responseDataUUID = KEY;
        if (responseDataUUID === KEY) {
          prepareResponse(responseSample);
        }
      } catch (err) {
        if (err.response.status === 500) {
          console.log('There was a problem with the server');
        } else {
          console.log(err.response.data.msg);
        }
      }
    }
  };

  const classes = useStyles();
  return (
    <>
      <form onSubmit={(e) => handleOnSumbit(e)}>
        <Grid container direction="row" justify="space-around" className={classes.root}>
          <Grid
            item
            onClick={() => {
              developmentFileRef.current?.click();
            }}
          >
            <input
              type="file"
              className={classes.hide}
              ref={developmentFileRef}
              onChange={(e) => {
                handleInputChange(e, 'development file');
              }}
            />
            <Grid item>
              <Button variant="outlined">{devFileName}</Button>
            </Grid>
          </Grid>
          <Grid
            item
            onClick={() => {
              validationFileRef.current?.click();
            }}
          >
            <input
              type="file"
              className={classes.hide}
              ref={validationFileRef}
              onChange={(e) => {
                handleInputChange(e, 'validation file');
              }}
            />
            <Grid item>
              <Button variant="outlined">{valFileName}</Button>
            </Grid>
          </Grid>
          <Grid item>
            <Button variant="outlined" type="submit">
              PROFILE THE DATA
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default InputCSV;
