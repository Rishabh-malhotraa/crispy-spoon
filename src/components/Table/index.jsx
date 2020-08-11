import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';
import KPI from '../../Data/KPI';

import ListTable from './ListTable';

const useStyles = makeStyles({
  root: {},
  heading: {
    marginTop: '2rem',
    marginBottom: '2rem',
    textAlign: 'center',
    borderRadius: '12px',
    backgroundColor: '#edf6f9',
    width: '100%',
  },
});

const KeyPerformanceIndexComponent = () => {
  const classes = useStyles();
  return (
    <Grid item xs={4}>
      <Typography variant="h5" className={classes.heading}>
        KEY PERFORMANCE INDICATORS
      </Typography>
      {KPI.map((element) => {
        return (
          <ListTable title={element.title} list={element.rows} key={uuidv4()} />
        );
      })}
    </Grid>
  );
};

export default KeyPerformanceIndexComponent;
