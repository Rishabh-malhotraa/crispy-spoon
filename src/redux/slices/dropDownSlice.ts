import { createSlice } from '@reduxjs/toolkit';
import StateInterface from 'redux/type';

const initialValue = {
  function: '',
  outcomeType: '',
  dataStructure: '',
  modelUse: '',
  analyticTechnique: '',
  modelType: '',
  modelStructure: '',
  entity: '',
  buisnessUnit: '',
  modelTier: '',
  riskType: '',
  eventName: '',
};

export const formSlice = createSlice({
  name: 'dropDowm',
  initialState: {
    value: '',
  },
  reducers: {
    onSelect: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const selectOption = (state: StateInterface): string => state.formOption.value;
export const { onSelect } = formSlice.actions;

export default formSlice.reducer;
