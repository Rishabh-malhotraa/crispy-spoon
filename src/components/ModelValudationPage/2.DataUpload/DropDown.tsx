import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
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
}

const DropDown: React.FC<AppProps> = ({
  options,
  size = 'small',
  variant = 'filled',
  inputLabel = '',
  width = '100%',
  initialValue = '',
}) => {
  const [value, setValue] = React.useState(initialValue);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string);
  };
  return (
    <FormControl varaiant-={variant} size={size} style={{ minWidth: width }}>
      <InputLabel id={`dropdown-table${inputLabel}`}>{inputLabel}</InputLabel>
      <NativeSelect id={`dropdown-table${inputLabel}`} value={value} onChange={handleChange} disableUnderline>
        {options.map((option) => {
          return (
            <option key={uuid()} value={option}>
              {option}
            </option>
          );
        })}
      </NativeSelect>
    </FormControl>
  );
};

export default DropDown;
