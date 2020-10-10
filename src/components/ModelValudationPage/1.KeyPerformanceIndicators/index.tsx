/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Metrics from './Metrics';
import ModelInformation from './Model-Information';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    // '& .padding ': {
    //   padding: '1rem',
    // },
  },
});

const KeyPerformanceIndexComponent = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid container direction="row" className={classes.root}>
      <Grid item style={{ padding: '1rem' }} sm={12} md={6}>
        <ModelInformation />
      </Grid>
      <Grid item sm={12} md={6} style={{ padding: '1rem' }}>
        <Metrics />
      </Grid>
    </Grid>
  );
};

export default KeyPerformanceIndexComponent;
