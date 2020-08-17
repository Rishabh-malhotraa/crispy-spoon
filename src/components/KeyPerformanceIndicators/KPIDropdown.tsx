import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import { v4 as uuid } from 'uuid';
import { Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ModelType } from '../../Data/KPI';

import { onSelect, selectOption } from '../../redux/reducers/form/formSlice';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '100vw',
      justifyContent: 'center',
    },
    form: {
      width: '30%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginLeft: '24px',
        marginRight: '24px',
      },
    },
  })
);

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
  const classes = useStyles();
  const option = useSelector(selectOption); // value of state from reducer
  const dispatch = useDispatch(); // dispatch function

  console.log(option);
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    dispatch(onSelect(event.target.value as string));
  };

  return (
    <Grid item className={classes.root}>
      <FormControl variant="outlined" size="small" className={classes.form}>
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
