/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-named-as-default-member */
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import ModelInformationData from 'Data/ModelInformation';
import { modelTypeData, ModelTypeInterface } from 'Data/ModelType';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import DropDown from '../DropDown';
import Header from 'components/Helper/Header';
import KPIDropDown from '../KPIDropdown';
import { CountryType, countries } from 'Data/countryList';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles({
  root: {
    '& .padding': {
      paddingLeft: '1rem',
      paddingRight: '1rem',
    },
    '& .MuiFormControl-root': {
      backgroundColor: 'whitesmoke',
    },
  },
});

export interface ObjectProp {
  Function: string;
  'Outcome Type'?: string;
  'Data Structure'?: string;
  'Analytic Technique'?: string;
  'Model Use'?: string;
}

const initialState = {
  Function: 'Risk',
  'Outcome Type': '',
  'Data Structure': '',
  'Anaytical Technique': '',
  'Model Use': '',
};

const dataOption = ['123', '12121', '213312'];
interface AppProps {
  onChangeHandler: (args: any) => void;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ModelInformation: React.FC<AppProps> = ({ onChangeHandler }) => {
  const { modelDimension, modelSpecification, modelUseData } = ModelInformationData;
  const [values, setValues] = useState<ObjectProp>(initialState);

  const handleFormInput = (fieldId: string, value: string) => {
    setValues({ ...values, [fieldId]: value });
    onChangeHandler(values);
  };
  // useEffect(() => {
  //   setValues({ ...values, 'Outcome Type': '' });
  // }, [values.Function]);

  // const textFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fieldId: string) => {
  //   const temp_value = e.target.value;
  //   handleFormInput(fieldId, temp_value);
  // };

  const modelUse = () => {
    const functionName: string = values.Function;
    const { collection } = modelUseData;
    const data = collection.filter((element) => element.type === functionName);
    return data[0].options;
  };
  let ModelTypeOptions: ModelTypeInterface[];

  const modelSpecifics = () => {
    if (ModelTypeOptions) {
      ModelTypeOptions.splice(0, ModelTypeOptions.length);
    }
    if (values.Function) {
      ModelTypeOptions = modelTypeData.filter((element: ModelTypeInterface) => {
        if (element.function === values.Function) return element;
      });
    }
    if (values['Outcome Type']) {
      ModelTypeOptions = ModelTypeOptions.filter((element: ModelTypeInterface) => {
        if (element.outcomeType === values['Outcome Type']) return element;
      });
    }
    if (values['Model Use']) {
      ModelTypeOptions = ModelTypeOptions.filter((element: ModelTypeInterface) => {
        if (element.modelUse.find((str) => str === values['Model Use'])) return element;
      });
    }
    const ModelTypeData = ModelTypeOptions.map((element: ModelTypeInterface) => {
      return element.modelType;
    });
    return ModelTypeData;
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <form>
        <Grid container item>
          <Grid item xs={6} className="padding">
            <Header heading={modelDimension.heading} />
            <div style={{ padding: '8px' }}>
              <DropDown
                options={modelDimension.data[0].options}
                variant="filled"
                size="small"
                initialValue="Risk"
                inputLabel={modelDimension.data[0].name}
                fieldId={modelDimension.data[0].name}
                onChangeHandler={handleFormInput}
              />
              <DropDown
                options={modelDimension.data[1].options}
                variant="filled"
                size="small"
                inputLabel={modelDimension.data[1].name}
                fieldId={modelDimension.data[1].name}
                onChangeHandler={handleFormInput}
              />
              <DropDown
                options={modelDimension.data[2].options}
                variant="filled"
                size="small"
                inputLabel={modelDimension.data[2].name}
                fieldId={modelDimension.data[2].name}
                onChangeHandler={handleFormInput}
              />

              <DropDown
                options={modelDimension.data[3].options}
                variant="filled"
                size="small"
                fieldId={modelDimension.data[3].name}
                inputLabel={modelDimension.data[3].name}
                onChangeHandler={handleFormInput}
              />

              <DropDown
                options={modelUse()}
                variant="filled"
                size="small"
                fieldId={modelUseData.name}
                inputLabel={modelUseData.name}
                onChangeHandler={handleFormInput}
              />
            </div>
          </Grid>
          {
            // end of left list
          }
          <Grid item xs={6} className="padding">
            <Header heading={modelSpecification.heading} />
            <div style={{ padding: '8px' }}>
              <KPIDropDown />
              <DropDown
                options={modelSpecifics()}
                variant="filled"
                size="small"
                fieldId={modelSpecification.data[0].name}
                inputLabel={modelSpecification.data[0].name}
                onChangeHandler={handleFormInput}
              />
              <DropDown
                options={modelSpecification.data[1].options}
                variant="filled"
                size="small"
                fieldId={modelSpecification.data[1].name}
                inputLabel={modelSpecification.data[1].name}
                onChangeHandler={handleFormInput}
              />
              <DropDown
                options={modelSpecification.data[2].options}
                variant="filled"
                size="small"
                fieldId={modelSpecification.data[2].name}
                inputLabel={modelSpecification.data[2].name}
                onChangeHandler={handleFormInput}
              />
              <DropDown
                options={modelSpecification.data[3].options}
                variant="filled"
                size="small"
                fieldId={modelSpecification.data[3].name}
                inputLabel={modelSpecification.data[3].name}
                onChangeHandler={handleFormInput}
              />
              <DropDown
                options={modelSpecification.data[4].options}
                variant="filled"
                size="small"
                fieldId={modelSpecification.data[4].name}
                inputLabel={modelSpecification.data[4].name}
                onChangeHandler={handleFormInput}
              />
              {
                // <ListView title={modelSpecification.heading} data={modelSpecification.data} />
              }
            </div>
          </Grid>
        </Grid>
        <div style={{ padding: '8px' }}>
          <Grid item className="padding" xs={12} style={{ display: 'flex' }}>
            <Grid
              item
              sm={6}
              style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '24px ' }}
            >
              <DropDown
                options={dataOption}
                variant="filled"
                inputLabel="Risk Type"
                fieldId="Risk Type"
                onChangeHandler={handleFormInput}
                width="45%"
              />
              <DropDown
                options={dataOption}
                variant="filled"
                inputLabel="Event Name"
                fieldId="Event Name"
                onChangeHandler={handleFormInput}
                width="45%"
              />
            </Grid>
            <Grid item sm={6} style={{ paddingLeft: '24px ' }}>
              <TextField
                label="Event Defination"
                variant="filled"
                size="small"
                style={{ width: '100%' }}
                // onChange={(e) => {
                //   textFieldChange(e, 'Event Defination');
                // }}
              />
            </Grid>
          </Grid>
        </div>
        <Grid item style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
          <Header heading="Model Inforamtion" />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <TextField label="Model Name" variant="filled" size="small" style={{ width: '22%' }} />
            <TextField
              label="Activity Classification"
              variant="filled"
              size="small"
              style={{ width: '22%' }}
            />
            <TextField
              label="Last Validation Date"
              variant="filled"
              size="small"
              type="date"
              defaultValue="2020-01-31"
              style={{ width: '22%' }}
            />
            <TextField
              label="Last Monitored Date"
              variant="filled"
              size="small"
              type="date"
              defaultValue="2020-01-31"
              style={{ width: '22%' }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
            <TextField label="Asset Class" variant="filled" size="small" style={{ width: '22%' }} />
            <TextField label="Product Name" variant="filled" size="small" style={{ width: '22%' }} />

            <Autocomplete
              id="country-select"
              style={{ width: '22%' }}
              options={countries as CountryType[]}
              autoHighlight
              getOptionLabel={(option) => option.label}
              renderOption={(option) => <>{`${option.label} ${option.code}`}</>}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Choose a country"
                  variant="filled"
                  size="small"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: 'new-password', // disable autocomplete and autofill
                  }}
                />
              )}
            />
            <TextField label="Portfolio" variant="filled" size="small" style={{ width: '22%' }} />
          </div>
          <Header heading="Development Data date Frame" />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
            <TextField
              label="Observation Month"
              variant="filled"
              size="small"
              type="date"
              defaultValue="2020-01-31"
              style={{ width: '30%' }}
            />
            <TextField
              label="Observation Window"
              variant="filled"
              size="small"
              type="date"
              defaultValue="2020-01-31"
              style={{ width: '30%' }}
            />
            <TextField
              label="Performance Window"
              variant="filled"
              size="small"
              type="date"
              defaultValue="2020-01-31"
              style={{ width: '30%' }}
            />
          </div>
          <Header heading="Development Data date Frame" />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
            <TextField
              label="Observation Month"
              variant="filled"
              size="small"
              type="date"
              defaultValue="2020-01-31"
              style={{ width: '30%' }}
            />
            <TextField
              label="Observation Window"
              variant="filled"
              size="small"
              type="date"
              defaultValue="2020-01-31"
              style={{ width: '30%' }}
            />
            <TextField
              label="Performance Window"
              variant="filled"
              size="small"
              type="date"
              defaultValue="2020-01-31"
              style={{ width: '30%' }}
            />
          </div>
        </Grid>
      </form>
    </div>
  );
};

export default ModelInformation;
