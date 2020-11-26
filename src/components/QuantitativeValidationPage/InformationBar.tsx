import React from 'react';
import Grid from '@material-ui/core/Grid';
import DropDown from 'components/Helper/DropDown';
import InfoIcon from 'components/Helper/InfoIcon';

import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    fontSize: '20px',
    color: 'rbga(0,0,0,0.7)',
    // '& span.margin': {
    //   marginLeft: '1rem',
    //   marginRight: '1rem',
    // },
    // '& .MuiSelect-root': {
    //   paddingTop: '2px',
    //   paddingBottom: '2px',
    // },
    '.& MuiAppBar-root': {
      backgroundColor: 'white',
      zIndex: '100',
    },
  },
  toolbar: {
    position: 'sticky',
    color: 'red',
  },
});
const options = ['One', 'Two', 'Three'];
const InformationBar = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.toolbar}>
        <Grid item container justify="space-around" alignItems="center" className={classes.root}>
          <Grid item>
            <span className="margin">Model Type: Stress Testing Model</span>
          </Grid>
          <Grid item>
            <DropDown options={options} inputLabel="Segment" width="10vw" />
          </Grid>
          <Grid item>
            <DropDown options={options} inputLabel="BIS" width="10vw" />
          </Grid>
          <Grid item>
            <InfoIcon />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default InformationBar;
