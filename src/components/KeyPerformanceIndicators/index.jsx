import React from 'react';
import Grid from '@material-ui/core/Grid';
import { v4 as uuidv4 } from 'uuid';
import KPI from '../../Data/KPI';

import ListTable from './ListTable';
import Header from '../Header';

const KeyPerformanceIndexComponent = () => {
  return (
    <Grid item xs={3}>
      <Header heading="KEY PERFORMANCE INDICATORS" />
      {KPI.map((element) => {
        return (
          <ListTable title={element.title} rows={element.rows} key={uuidv4()} />
        );
      })}
    </Grid>
  );
};

export default KeyPerformanceIndexComponent;
