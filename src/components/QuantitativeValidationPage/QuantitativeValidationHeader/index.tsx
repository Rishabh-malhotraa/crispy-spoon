import React from 'react';
import Grid from '@material-ui/core/Grid';
import DropDown from 'components/Helper/DropDown';
import InfoIcon from './InfoIcon';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    fontSize: '20px',
    color: 'rbga(0,0,0,0.7)',
    '& span.margin': {
      marginLeft: '1rem',
      marginRight: '1rem',
    },
    '& .MuiSelect-root': {
      paddingTop: '2px',
      paddingBottom: '2px',
    },
  },

  select: {
    color: 'red',
  },
});
const options = ['One', 'Two', 'Three'];
const InformationBar = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid item container justify="space-between" alignItems="center" className={classes.root}>
      <Grid item>
        <span className="margin">Model Type: Stress Testing Model</span>
      </Grid>
      <Grid item>
        <span className="margin">Segment:</span>
        <DropDown options={options} />
      </Grid>
      <Grid item>
        <span className="margin">BIS:</span>
        <DropDown options={options} />
      </Grid>
      <Grid item>
        <InfoIcon />
      </Grid>
    </Grid>
  );
};

export default InformationBar;
