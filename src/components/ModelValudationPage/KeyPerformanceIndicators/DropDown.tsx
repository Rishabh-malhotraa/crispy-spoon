import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { v4 as uuid } from 'uuid';
import { InputLabel } from '@material-ui/core';

type SizeType = 'medium' | 'small';
type VariantType = 'outlined' | 'filled' | 'standard';

interface AppProps {
  options: string[];
  size?: SizeType;
  variant?: VariantType;
  inputLabel?: string;
  width?: string;
  initialValue?: string;
  fieldId?: string;
  onChangeHandler: (fieldId: string, value: string) => void;
}

interface EventProps {
  (event: React.ChangeEvent<{ value: unknown }>, fieldId: string): void;
}

const DropDown: React.FC<AppProps> = ({
  options,
  size = 'small',
  variant = 'outlined',
  inputLabel = '',
  width = '100%',
  initialValue = '',
  fieldId = '',
  onChangeHandler,
}) => {
  const [value, setValue] = React.useState(initialValue);

  const handleChange: EventProps = (event, fieldId) => {
    const value = event.target.value as string;
    onChangeHandler(fieldId, value);
    setValue(value);
  };
  return (
    <FormControl variant={variant} size={size} style={{ minWidth: width }}>
      <InputLabel id={`dropdown-table${inputLabel}`}>{inputLabel}</InputLabel>
      <Select
        labelId={`dropdown-table${inputLabel}`}
        id="demo-simple-select-filled"
        value={value}
        onChange={(e) => handleChange(e, fieldId)}
      >
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
