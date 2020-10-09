import { createSlice } from '@reduxjs/toolkit';
import StateInterface from 'redux/type';

export const uuidSlice = createSlice({
  name: 'uuidOption',
  initialState: {
    value: '',
  },
  reducers: {
    onuuidType: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const selectuuid = (state: StateInterface): string => state.uuidOption.value;
export const { onuuidType } = uuidSlice.actions;

export default uuidSlice.reducer;
