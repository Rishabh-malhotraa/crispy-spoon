import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from './styles.module.css';
import Header from 'components/Helper/Header';
import { v1 as uuid } from 'uuid';
import List from './List';

import KPIData from 'Data/KPI-page1';

const ListChip = (): JSX.Element => {
  return (
    <>
      <Grid item>
        <Header heading="Key Performace Metrics" />
      </Grid>
      <Grid item className={styles['grid-container']}>
        {KPIData.map(({ data, test }) => {
          return (
            <Grid item key={uuid()}>
              <Header heading={test} />
              <List data={data} title={test} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
export default ListChip;
