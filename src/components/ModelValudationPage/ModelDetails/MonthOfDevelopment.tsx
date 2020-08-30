import React, { useState } from 'react';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

const DatePicker = (): JSX.Element => {
  const [selectedDate, handleDateChange] = useState(new Date());

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: any) => {
    handleDateChange(event.target.value);
  };
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <KeyboardDatePicker
        autoOk
        size="small"
        variant="inline"
        label="Month of Development"
        openTo="month"
        format="MM/yyyy"
        value={selectedDate}
        InputAdornmentProps={{ position: 'start' }}
        onChange={(event) => handleChange(event)}
        style={{ width: '45%' }}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
