/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Header from 'components/Helper/Header';
import ListChip from './ListChip';
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
  // const [data, setData] = useState();
  const [, setData] = useState();

  const callback = (args: any) => {
    setData(args);
  };

  return (
    <Grid container direction="row" className={classes.root}>
      {/* // padding of 1 rem add using selector  */}
      <Grid item style={{ padding: '1rem' }} md={6}>
        <ModelInformation onChangeHandler={callback} />
      </Grid>
      <Grid item md={6} style={{ padding: '1rem' }}>
        <Grid item>
          <Header heading="Key Performace Metrics" />
        </Grid>
        <Grid item />
        <ListChip />
      </Grid>
    </Grid>
  );
};

export default KeyPerformanceIndexComponent;
