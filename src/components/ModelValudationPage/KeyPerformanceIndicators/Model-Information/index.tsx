import React from 'react';
import Grid from '@material-ui/core/Grid';
import ListView from './ListView';
import ModelInformationData from 'Data/ModelInformation';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import DropDown from 'components/Helper/DropDown';
import Header from 'components/Helper/Header';

const useStyles = makeStyles({
  root: {
    '& .padding': {
      paddingLeft: '2rem',
      paddingRight: '2rem',
    },
    '& .MuiFormControl-root': {
      backgroundColor: 'whitesmoke',
    },
  },
});

const option = ['123', '12121', '213312'];

const ModelInformation = (): JSX.Element => {
  const { modelDimension, modelSpecification, riskInfo } = ModelInformationData;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container item>
        <Grid item xs={6} className="padding">
          <ListView title={modelDimension.heading} data={modelDimension.data} />
        </Grid>
        <Grid item xs={6} className="padding">
          <ListView title={modelSpecification.heading} data={modelSpecification.data} />
        </Grid>
      </Grid>
      <Grid
        item
        className="padding"
        xs={12}
        style={{ paddingTop: '8px', display: 'flex' }}
        justify="space-between"
      >
        <DropDown options={option} variant="filled" inputLabel="Risk Type" width="29%" />
        <DropDown options={option} variant="filled" inputLabel="Event Name" width="29%" />
        <TextField label="Event Defination" variant="filled" size="small" />
      </Grid>
      <Grid item style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
        <Header heading="Model Inforamtion" />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <TextField label="Model Name" variant="filled" size="small" />
          <TextField label="Activity Classification" variant="filled" size="small" />
          <TextField label="Last Validation Date" variant="filled" size="small" />
          <TextField label="Last Monitored Date" variant="filled" size="small" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
          <TextField label="Asset Class" variant="filled" size="small" />
          <TextField label="Product Name" variant="filled" size="small" />
          <TextField label="Country" variant="filled" size="small" />
          <TextField label="Portfolio" variant="filled" size="small" />
        </div>
        <Header heading="Development Data Time Frame" />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
          <TextField label="Observation Month" variant="filled" size="small" />
          <TextField label="Observation Window" variant="filled" size="small" />
          <TextField label="Performance Window" variant="filled" size="small" />
        </div>
        <Header heading="Development Data Time Frame" />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
          <TextField label="Observation Month" variant="filled" size="small" />
          <TextField label="Observation Window" variant="filled" size="small" />
          <TextField label="Performance Window" variant="filled" size="small" />
        </div>
      </Grid>
    </div>
  );
};

export default ModelInformation;
