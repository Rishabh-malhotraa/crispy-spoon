import { createSlice } from '@reduxjs/toolkit';
import StateInterface from 'redux/type';

export const tabIndexSlice = createSlice({
  name: 'tabIndexOption',
  initialState: {
    value: 0,
  },
  reducers: {
    onTabIndexChange: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const selectTabIndex = (state: StateInterface): number => state.tabIndexOption.value;
export const { onTabIndexChange } = tabIndexSlice.actions;

export default tabIndexSlice.reducer;
