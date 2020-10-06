import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from './styles.module.css';
import Header from 'components/Helper/Header';
import { v1 as uuid } from 'uuid';
import List from './List';

import { KPIData, Model } from 'Data/redundant/KPI';
import { useSelector } from 'react-redux';
import { selectOption } from 'redux/slices/formSlice';

const ListChip = (): JSX.Element => {
  const option = useSelector(selectOption);
  let SelectedModelData: Model = KPIData[0];
  let flag = false;
  if (option) {
    for (let i = 0; i < KPIData.length; i += 1) {
      if (KPIData[i].modelName === option) {
        SelectedModelData = KPIData[i];
        flag = true;
      }
    }
  }
  const { data } = SelectedModelData;
  return (
    <Grid item direction="column" className={styles['grid-container']}>
      {flag &&
        data.map(({ tests, title }) => {
          return (
            <Grid item key={uuid()}>
              <Header heading={title} />
              <List tests={tests} />
            </Grid>
          );
        })}
    </Grid>
  );
};
export default ListChip;
