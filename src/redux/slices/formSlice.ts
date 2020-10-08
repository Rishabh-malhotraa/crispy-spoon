/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';
import StateInterface, { Form, Fields } from 'redux/type';
/**
 * 1. create a slice
 *    - initial slice
 *    - reducer
 *     - name? I still dont know what name does, tbrh
 */

const d = new Date();

export const initialValue = {
  function: 'Risk',
  outcomeType: '',
  dataStructure: '',
  analyticTechnique: '',
  modelUse: '',
  modelType: '',
  modelStructure: '',
  entity: '',
  businessUnit: '',
  modelTier: '',
  riskType: '',
  eventName: '',
  activityClassification: '',
  assetName: '',
  assetClass: '',
  country: '',
  eventDefination: '',
  modelName: '',
  productName: '',
  portfolio: '',
  developmentObservationMonth: d.getDate(),
  developmentObservationWindow: d.getDate(),
  developmentPerformanceWindow: d.getDate(),
  validationObservationMonth: d.getDate(),
  validationObservationWindow: d.getDate(),
  validationPerformanceWindow: d.getDate(),
};

const name = 'function';
export const formSlice = createSlice({
  name: 'form',
  initialState: initialValue,
  reducers: {
    onSelect: (state, action) => {
      const { field, value }: { field: Fields; value: string } = action.payload;
      console.log(field);
      state.businessUnit = value;
    },
  },
});

// values of the action would be something like this
// setValues({ ...values, [fieldId]: value });

// you'll get values of state from here, the interface fiel
export const selectOption = (state: StateInterface): Form => {
  return state.formOption;
};
export const { onSelect } = formSlice.actions;

export default formSlice.reducer;
