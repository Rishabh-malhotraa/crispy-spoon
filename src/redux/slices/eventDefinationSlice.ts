import { createSlice } from '@reduxjs/toolkit';
import StateInterface from 'redux/type';

export const eventDefinationSlice = createSlice({
  name: 'eventDefinationOption',
  initialState: {
    eventDefination: '',
  },
  reducers: {
    onEventDefinationType: (state, action) => {
      state.eventDefination = action.payload;
    },
  },
});

export const selectEventDefination = (state: StateInterface): string =>
  state.eventDefinationOption.eventDefination;
export const { onEventDefinationType } = eventDefinationSlice.actions;

export default eventDefinationSlice.reducer;
