import { createSlice } from '@reduxjs/toolkit';
import StateInterface from 'redux/type';

export const modelNameOption = createSlice({
  name: 'modelNameOption',
  initialState: {
    modelName: '',
  },
  reducers: {
    onModelNameType: (state, action) => {
      state.modelName = action.payload;
    },
  },
});

export const selectModelName = (state: StateInterface): string => state.modelNameOption.modelName;
export const { onModelNameType } = modelNameOption.actions;

export default modelNameOption.reducer;
