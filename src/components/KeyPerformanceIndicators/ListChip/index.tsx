import React from 'react';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import styles from './styles.module.css';
import Header from '../../Header';
import { v1 as uuid } from 'uuid';
import List from './List2';

import { KPIData, Model } from '../../../Data/KPI';
import { useSelector } from 'react-redux';
import { selectOption } from '../../../redux/reducers/form/formSlice';

const ListChip = (): JSX.Element => {
  const [value, setValue] = React.useState<
    'primary' | 'secondary' | 'default' | undefined
  >('primary');

  const handleDelete = () => {
    const color = value === 'primary' ? 'secondary' : 'primary';
    setValue(color);
  };

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
    <Grid container direction="column" className={styles['grid-container']}>
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
