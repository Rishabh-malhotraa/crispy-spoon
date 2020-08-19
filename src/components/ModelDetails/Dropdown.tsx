import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles((theme) => ({
  FormControl: {
    margin: theme.spacing(1),
    width: '45%',
  },
}));
interface AppProps {
  title: string;
  options: string[];
}

const Dropdown: React.FC<AppProps> = (props) => {
  const [value, setValue] = React.useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: any) => {
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
