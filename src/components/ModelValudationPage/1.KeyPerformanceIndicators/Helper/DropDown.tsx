import React, { memo } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { v4 as uuid } from 'uuid';
import { InputLabel } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { selectForm, onSelect } from 'redux/slices/formSlice';
import { Fields } from 'redux/type';

type SizeType = 'medium' | 'small';
type VariantType = 'outlined' | 'filled' | 'standard';

interface AppProps {
  options: string[];
  size?: SizeType;
  variant?: VariantType;
  inputLabel?: string;
  width?: string;
  initialValue?: string;
  fieldId: Fields;
}

interface EventProps {
  (event: React.ChangeEvent<{ value: unknown }>, fieldId: Fields): void;
}

const DropDown: React.FC<AppProps> = ({
  options,
  size = 'small',
  variant = 'outlined',
  inputLabel = '',
  width = '100%',
  fieldId,
}) => {
  // we will get the state object here!
  const dropDownState = useSelector(selectForm);

  const dispatch = useDispatch();

  const handleChange: EventProps = (event, fieldId) => {
    const payload = { value: event.target.value as string, field: fieldId };
    dispatch(onSelect(payload));
  };

  const setValue = (): string | Date | undefined => {
    return dropDownState[fieldId];
  };
  return (
    <FormControl variant={variant} size={size} style={{ minWidth: width }}>
      <InputLabel id={`dropdown-table${inputLabel}`}>{inputLabel}</InputLabel>
      <Select
        required
        labelId={`dropdown-table${inputLabel}`}
        id="demo-simple-select-filled"
        value={setValue()}
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

export default memo(DropDown);
