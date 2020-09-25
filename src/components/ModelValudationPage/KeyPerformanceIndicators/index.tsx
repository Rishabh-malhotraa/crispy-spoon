import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from 'components/Helper/Header';
import ListChip from './ListChip';
import KPIDropDown from './KPIDropdown';
import ModelInformation from './Model-Information';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    '& .padding ': {
      padding: '1rem',
    },
  },
});

const KeyPerformanceIndexComponent = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid container direction="row" className={classes.root}>
      {/* // padding of 1 rem add using selector  */}
      <Grid item style={{ width: '100%' }} md={6} className="padding">
        <ModelInformation />
      </Grid>
      <Grid item container md={6} className="padding">
        <Header heading="Key Performace Metrics" />
        <KPIDropDown />
        <ListChip />
      </Grid>
    </Grid>
  );
};

export default KeyPerformanceIndexComponent;
