import React, { useState } from 'react';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

const DatePicker = () => {
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
    <>
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
          onChange={(date) => handleDateChange(date)}
          style={{ width: '100%' }}
        />
      </MuiPickersUtilsProvider>
    </>
  );
};

export default DatePicker;
