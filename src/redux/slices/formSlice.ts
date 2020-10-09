/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';
import StateInterface, { Form, Fields } from 'redux/type';
/**
 * 1. create a slice
 *    - initial slice
 *    - reducer
 *     - name? I still dont know what name does, tbrh
 */

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
  productName: '',
  portfolio: '',
  lastValidationDate: '2020-01-31',
  lastMonitoredDate: '2020-01-31',
  developmentObservationMonth: '2020-01-31',
  developmentObservationWindow: '2020-01-31',
  developmentPerformanceWindow: '2020-01-31',
  validationObservationMonth: '2020-01-31',
  validationObservationWindow: '2020-01-31',
  validationPerformanceWindow: '2020-01-31',
};

export const formSlice = createSlice({
  name: 'form',
  initialState: initialValue,
  reducers: {
    onSelect: (state, action) => {
      const { field, value }: { field: Fields; value: string } = action.payload;
      // @ts-ignore
      state[field] = value;
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
