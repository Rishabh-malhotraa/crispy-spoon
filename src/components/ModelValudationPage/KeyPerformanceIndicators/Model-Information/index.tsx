import React from 'react';
import Grid from '@material-ui/core/Grid';
import ListView from './ListView';
import ModelInformationData from 'Data/ModelInformation';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  root: {
    '& .padding': {
      // paddingLeft: '2rem',
      // paddingRight: '2rem',
    },
    '& .MuiFormControl-root': {
      backgroundColor: 'whitesmoke',
    },
  },
});

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
      <Grid item className="padding" style={{ paddingTop: '0rem' }} xs={6}>
        <ListView data={riskInfo.data} />
      </Grid>
      <Grid item className="padding" xs={6} style={{ paddingTop: '0rem' }}>
        <TextField label="Event Defination" variant="filled" style={{ width: '100%' }} />
      </Grid>
    </div>
  );
};

export default ModelInformation;
