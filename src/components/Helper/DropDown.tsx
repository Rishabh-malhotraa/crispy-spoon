import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { v4 as uuid } from 'uuid';
import { InputLabel } from '@material-ui/core';

const DropDown: React.FC<{ options: string[] }> = ({ options }) => {
  const [value, setValue] = React.useState(options[0]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string);
  };
  return (
    <FormControl variant="outlined" size="small">
      <InputLabel htmlFor="dropdown-table" />
      <Select labelId="dropdown-table" id="demo-simple-select-filled" value={value} onChange={handleChange}>
        {options.map((option) => {
          return (
            <MenuItem key={uuid()} value={option}>
              {option}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default DropDown;
