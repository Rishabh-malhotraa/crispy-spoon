/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { KPIData, Model } from '../../../Data/KPI';
import { useSelector } from 'react-redux';
import { selectOption } from '../../../redux/reducers/form/formSlice';
import Grid from '@material-ui/core/Grid';
import List from './List';
import styles from './styles.module.css';

export default function ListTable(): JSX.Element {
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
    <>
      {flag && (
        <Grid className={styles.root} container justify="space-around">
          <Grid className={styles.item} item lg={4}>
            <List title={data[0].title} tests={data[0].tests} />
          </Grid>
          <Grid
            item
            container
            direction="column"
            justify="space-around"
            lg={4}
            className={styles.itemContainer}
          >
            <Grid className={styles.item} item>
              <List title={data[1].title} tests={data[1].tests} />
            </Grid>
            <Grid className={styles.item} item>
              <List title={data[2].title} tests={data[2].tests} />
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
}
