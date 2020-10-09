import { createSlice } from '@reduxjs/toolkit';
import StateInterface from 'redux/type';

export const modelNameOption = createSlice({
  name: 'modeNameOption',
  initialState: {
    modelName: '',
  },
  reducers: {
    onModelNameType: (state, action) => {
      state.modelName = action.payload;
    },
  },
});

export const selectModelName = (state: any): string => state.modeNameOption.eventDefination;
export const { onModelNameType } = modelNameOption.actions;

export default modelNameOption.reducer;
