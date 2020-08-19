import React from 'react';
import Chip from '@material-ui/core/Chip';

import { v4 as uuid } from 'uuid';
import styles from './styles.module.css';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { lightGreen, red } from '@material-ui/core/colors';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';

const colorTheme = createMuiTheme({
  palette: {
    primary: {
      main: lightGreen[300],
    },
    secondary: {
      main: red[200],
    },
  },
});

interface Data {
  testName: string;
  selected: boolean;
}

const List: React.FC<{ tests: string[] }> = ({ tests }) => {
  const data: Array<Data> = tests.map((element) => {
    return { testName: element, selected: true };
  });
  const [checked, setChecked] = React.useState<Array<Data>>(data);

  const handleDelete = (index: number): void => {
    const value = !checked[index].selected;
    const newArray = checked.slice();
    newArray[index].selected = value;
    setChecked(newArray);
  };

  return (
    <ThemeProvider theme={colorTheme}>
      {tests.map((test, index) => {
        return (
          <Chip
            key={uuid()}
            label={test}
            deleteIcon={
              checked[index].selected ? (
                <CheckCircleRoundedIcon />
              ) : (
                <CancelRoundedIcon />
              )
            }
            className={styles.chip}
            color={checked[index].selected ? 'primary' : 'secondary'}
            style={{ margin: '4px' }}
            onDelete={() => {
              handleDelete(index);
            }}
          />
        );
      })}
    </ThemeProvider>
  );
};
export default List;
