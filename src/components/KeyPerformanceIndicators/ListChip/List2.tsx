/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Chip from '@material-ui/core/Chip';

import { v4 as uuid } from 'uuid';
import styles from './styles.module.css';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { orange, lightGreen } from '@material-ui/core/colors';

const colorTheme = createMuiTheme({
  palette: {
    primary: {
      main: lightGreen[300],
    },
    secondary: {
      main: orange[200],
    },
  },
});

const List: React.FC<{ tests: string[] }> = ({ tests }) => {
  const data: Array<'primary' | 'secondary' | 'default' | undefined> = [];
  for (let i = 0; i < tests.length; i += 1) {
    data.push('primary');
  }
  const [checked, setChecked] = React.useState<
    Array<'primary' | 'secondary' | 'default' | undefined>
  >(data);

  const handleDelete = (index: number): void => {
    const value = checked[index] === 'primary' ? 'secondary' : 'primary';
    console.log(value);
    const newArray = checked.slice();
    newArray[index] = value;
    setChecked(newArray);
  };

  return (
    <ThemeProvider theme={colorTheme}>
      {tests.map((test, index) => {
        return (
          <Chip
            key={uuid()}
            label={test}
            className={styles.chip}
            color={checked[index]}
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
