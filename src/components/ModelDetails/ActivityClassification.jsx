import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  FormControl: {
    margin: theme.spacing(1),
    width: '100%',
  },
}));

const ActivityClassification = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const classes = useStyles();

  return (
    <>
      <FormControl
        className={classes.FormControl}
        variant="outlined"
        size="small"
      >
        <InputLabel id="activity-classification">
          Activity Classification
        </InputLabel>
        <Select
          id="activity-classification"
          label="activity-classification"
          value={value}
          onChange={handleChange}
          inputProps={{
            name: 'value',
            id: 'activity-classification',
          }}
        >
          <MenuItem value={10}>Activity Classification - I</MenuItem>
          <MenuItem value={20}>Activity Classification - II</MenuItem>
          <MenuItem value={30}>Activity Classification - III</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default ActivityClassification;
