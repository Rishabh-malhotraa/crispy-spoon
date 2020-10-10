/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-named-as-default-member */
import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import ModelInformationData from 'Data/Model-Information-page1';
import { modelTypeData, ModelTypeInterface } from 'Data/Model-Type-page1';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import DropDown from './Helper/DropDown';
import Header from 'components/Helper/Header';
import { CountryType, countries } from 'Data/countrylist';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useSelector, useDispatch } from 'react-redux';
import { onSelect, selectForm } from 'redux/slices/formSlice';
import { onEventDefinationType, selectEventDefination } from 'redux/slices/eventDefinationSlice';
import { onModelNameType, selectModelName } from 'redux/slices/modelNameSlice';
import { Fields } from 'redux/type';

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

const dataOption = ['123', '12121', '213312'];

const ModelInformation = (): JSX.Element => {
  // eslint-disable-next-line no-console
  console.log('h');
  const dispatch = useDispatch();
  const formState = useSelector(selectForm);
  const { modelDimension, modelSpecification, modelUseData, modelInformation } = ModelInformationData;

  // this is the redux---ish thing you need to hanlde

  useEffect(() => {
    dispatch(onSelect({ value: '', field: 'modelUse' }));
  }, [formState.function, dispatch]);
  useEffect(() => {
    dispatch(onSelect({ value: '', field: 'outcomeType' }));
  }, [formState.function, dispatch]);
  const textFieldInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fieldId: Fields) => {
    dispatch(onSelect({ value: e.target.value, field: fieldId }));
  };

  const modelUse = () => {
    const functionName: string = formState.function;
    const { collection } = modelUseData;
    const data = collection.filter((element) => element.type === functionName);
    return data[0].options;
  };

  const [modelTypeOptions, setModelTypeOptions] = useState(['Placeholder']);

  useEffect(() => {
    let ModelTypeOptions: ModelTypeInterface[] = modelTypeData;
    if (formState.function) {
      ModelTypeOptions = modelTypeData.filter((element: ModelTypeInterface) => {
        if (element.function === formState.function) return element;
      });
    }
    if (formState.outcomeType) {
      ModelTypeOptions = ModelTypeOptions.filter((element: ModelTypeInterface) => {
        if (element.outcomeType === formState.outcomeType) return element;
      });
    }
    if (formState.modelUse) {
      ModelTypeOptions = ModelTypeOptions.filter((element: ModelTypeInterface) => {
        if (element.modelUse.find((str) => str === formState.modelUse)) return element;
      });
    }
    const ModelTypeData = ModelTypeOptions.map((element: ModelTypeInterface) => {
      return element.modelType;
    });
    setModelTypeOptions(ModelTypeData);
  }, [formState.modelUse, formState.function, formState.outcomeType]);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <form>
        <Grid container item>
          <Grid item md={6} className="padding">
            <Header heading={modelDimension.heading} />
            <div style={{ padding: '8px' }}>
              <DropDown
                options={modelDimension.data[0].options}
                variant="filled"
                size="small"
                initialValue="Risk"
                inputLabel={modelDimension.data[0].name}
                fieldId="function"
              />
              <DropDown
                options={modelDimension.data[1].options}
                variant="filled"
                size="small"
                inputLabel={modelDimension.data[1].name}
                fieldId="outcomeType"
              />
              <DropDown
                options={modelDimension.data[2].options}
                variant="filled"
                size="small"
                inputLabel={modelDimension.data[2].name}
                fieldId="dataStructure"
              />
              <DropDown
                options={modelDimension.data[3].options}
                variant="filled"
                size="small"
                fieldId="analyticTechnique"
                inputLabel={modelDimension.data[3].name}
              />
              <DropDown
                options={modelUse()}
                variant="filled"
                size="small"
                fieldId="modelUse"
                inputLabel={modelUseData.name}
              />
            </div>
          </Grid>
          {
            // end of left list
          }
          <Grid item md={6} className="padding">
            <Header heading={modelSpecification.heading} />
            <div style={{ padding: '8px' }}>
              <DropDown
                options={modelTypeOptions}
                variant="filled"
                size="small"
                fieldId="modelType"
                inputLabel={modelSpecification.data[0].name}
              />
              <DropDown
                options={modelSpecification.data[1].options}
                variant="filled"
                size="small"
                fieldId="modelStructure"
                inputLabel={modelSpecification.data[1].name}
              />
              <DropDown
                options={modelSpecification.data[2].options}
                variant="filled"
                size="small"
                fieldId="entity"
                inputLabel={modelSpecification.data[2].name}
              />
              <DropDown
                options={modelSpecification.data[3].options}
                variant="filled"
                size="small"
                fieldId="businessUnit"
                inputLabel={modelSpecification.data[3].name}
              />
              <DropDown
                options={modelSpecification.data[4].options}
                variant="filled"
                size="small"
                fieldId="modelTier"
                inputLabel={modelSpecification.data[4].name}
              />
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
                fieldId="riskType"
                width="45%"
              />
              <DropDown
                options={dataOption}
                variant="filled"
                inputLabel="Event Name"
                fieldId="eventName"
                width="45%"
              />
            </Grid>
            <Grid item sm={6} style={{ paddingLeft: '24px ' }}>
              <TextField
                label="Event Defination"
                variant="filled"
                size="small"
                style={{ width: '100%' }}
                value={useSelector(selectEventDefination)}
                onChange={(e) => {
                  dispatch(onEventDefinationType(e.target.value));
                }}
              />
            </Grid>
          </Grid>
        </div>
        <Grid item style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
          <Header heading={modelInformation.heading} />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <TextField
              label="Model Name"
              variant="filled"
              size="small"
              style={{ width: '22%' }}
              value={useSelector(selectModelName)}
              onChange={(e) => {
                dispatch(onModelNameType(e.target.value));
              }}
            />
            <DropDown
              options={modelInformation.data[0].options}
              variant="filled"
              size="small"
              fieldId="activityClassification"
              inputLabel={modelInformation.data[0].name}
              width="22%"
            />
            <DropDown
              options={modelInformation.data[1].options}
              variant="filled"
              size="small"
              fieldId="assetClass"
              inputLabel={modelInformation.data[1].name}
              width="22%"
            />
            <DropDown
              options={modelInformation.data[2].options}
              variant="filled"
              size="small"
              fieldId="productName"
              inputLabel={modelInformation.data[2].name}
              width="22%"
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
            <DropDown
              options={modelInformation.data[3].options}
              variant="filled"
              size="small"
              fieldId="portfolio"
              inputLabel={modelInformation.data[3].name}
              width="22%"
            />
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
                  label="Country"
                  variant="filled"
                  size="small"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: 'new-password', // disable autocomplete and autofill
                  }}
                />
              )}
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
          <Header heading="Validation Data date Frame" />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
            <TextField
              label="Observation Month"
              variant="filled"
              size="small"
              type="date"
              onChange={(e) => textFieldInput(e, 'validationObservationMonth')}
              value={formState.validationObservationMonth}
              style={{ width: '30%' }}
            />
            <TextField
              label="Observation Window"
              variant="filled"
              size="small"
              type="date"
              onChange={(e) => textFieldInput(e, 'validationObservationWindow')}
              value={formState.validationObservationWindow}
              style={{ width: '30%' }}
            />
            <TextField
              label="Performance Window"
              variant="filled"
              size="small"
              type="date"
              onChange={(e) => textFieldInput(e, 'validationPerformanceWindow')}
              value={formState.validationPerformanceWindow}
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
              onChange={(e) => textFieldInput(e, 'developmentObservationMonth')}
              value={formState.developmentObservationMonth}
              style={{ width: '30%' }}
            />
            <TextField
              label="Observation Window"
              variant="filled"
              size="small"
              type="date"
              onChange={(e) => textFieldInput(e, 'developmentObservationWindow')}
              value={formState.developmentObservationWindow}
              style={{ width: '30%' }}
            />
            <TextField
              label="Performance Window"
              variant="filled"
              size="small"
              type="date"
              onChange={(e) => textFieldInput(e, 'developmentPerformanceWindow')}
              value={formState.developmentPerformanceWindow}
              style={{ width: '30%' }}
            />
          </div>
        </Grid>
      </form>
    </div>
  );
};

export default ModelInformation;
