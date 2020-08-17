import { createSlice } from '@reduxjs/toolkit';
import StateInterface from '../../type';

export const formSlice = createSlice({
  name: 'formOption',
  initialState: {
    value: '',
  },
  reducers: {
    onSelect: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const selectOption = (state: StateInterface): string =>
  state.formOption.value;
export const { onSelect } = formSlice.actions;

export default formSlice.reducer;
