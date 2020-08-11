import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles((theme) => ({
  FormControl: {
    margin: theme.spacing(1),
    width: '100%',
  },
}));

const Dropdown = (props) => {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const classes = useStyles();
  const { title, options } = props;
  return (
    <>
      <FormControl className={classes.FormControl} size="small">
        <InputLabel id={`${title}-id`}>{title}</InputLabel>
        <Select
          label={`${title}-id-label`}
          value={value}
          onChange={handleChange}
          inputProps={{
            name: 'value',
            id: `${title}-id-label`,
          }}
        >
          {options.map((option) => {
            return (
              <MenuItem key={uuidv4()} value={option}>
                {option}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
};

export default Dropdown;

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
