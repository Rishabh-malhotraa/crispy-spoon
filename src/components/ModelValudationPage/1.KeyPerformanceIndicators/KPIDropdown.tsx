import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import { v4 as uuid } from 'uuid';
// this is old KPI file and needs to be updates to new once the data is filled in
import { ModelType } from 'Data/redundant/KPI';

import { useSelector, useDispatch } from 'react-redux';
import { onSelect, selectOption } from 'redux/slices/formSlice';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       display: 'flex',
//       width: '100%',
//       justifyContent: 'center',
//     },
//     form: {
//       minWidth: '300px',
//       margin: '24px',
//       [theme.breakpoints.down('sm')]: {
//         width: '100%',
//         marginLeft: '24px',
//         marginRight: '24px',
//       },
//     },
//   })
// );

function MenuItems(): JSX.Element[] {
  return ModelType.map((model: string) => {
    return (
      <MenuItem value={model} key={uuid()}>
        {model}
      </MenuItem>
    );
  });
}

const SimpleSelect = (): JSX.Element => {
  // const classes = useStyles();
  const option = useSelector(selectOption); // value of state from reducer
  const dispatch = useDispatch(); // dispatch function

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    dispatch(onSelect(event.target.value as string));
  };

  return (
    <Grid item>
      <FormControl variant="filled" size="small" style={{ width: '100%' }}>
        <InputLabel id="KPI-dropdown-label">Model Type</InputLabel>
        <Select
          labelId="KPI-dropdown-label"
          id="KPI-dropdown-label-outlined"
          value={option}
          onChange={handleChange}
          label="Model Type"
        >
          {MenuItems()}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default SimpleSelect;
