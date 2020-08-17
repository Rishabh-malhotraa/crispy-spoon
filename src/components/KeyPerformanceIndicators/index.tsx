import React from 'react';
import Grid from '@material-ui/core/Grid';
import { v4 as uuidv4 } from 'uuid';
import { KPIData } from '../../Data/KPI';

import ListTable from './ListTable';
import KPIDropDown from './KPIDropdown';

const KeyPerformanceIndexComponent = (): JSX.Element => {
  return (
    <Grid item lg={3}>
      <KPIDropDown />
    </Grid>
  );
};

export default KeyPerformanceIndexComponent;
