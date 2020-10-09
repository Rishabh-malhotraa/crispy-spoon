/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createSlice } from '@reduxjs/toolkit';
import StateInterface, { KpiType } from 'redux/type';
import KPIData, { Data, TestName } from 'Data/KPI-page1';

/**
 * 1. create a slice
 *    - initial slice
 *    - reducer
 *     - name? I still dont know what name does, tbrh
 */

const initialData: Data[][] = KPIData.map((element) => {
  const { data } = element;
  const newData: Data[] = data.map((elementII) => {
    return { testName: elementII.kpiName, selected: true };
  });
  return newData;
});

const initialValue: KpiType = {
  'Model Level Test': initialData[0],
  'Factor Level Test': initialData[1],
  'Statistical Tests | Assumptions': initialData[2],
};

const kpiSlice = createSlice({
  name: 'kpiOption',
  initialState: initialValue,
  reducers: {
    onKpiSelect: (state, action) => {
      const { field, value }: { field: TestName; value: Data[] } = action.payload;
      state[field] = value;
    },
    onKpiDelete: (state, action) => {
      const { field, index }: { field: TestName; index: number } = action.payload;
      const value = state[field];
      const checked = value[index].selected;
      const newArray = value.slice();
      newArray[index].selected = !checked;
      state[field] = newArray;
    },
  },
});

// values of the action would be something like this
// setValues({ ...values, [fieldId]: value });

// you'll get values of state from here, the interface fiel
export const selectKpi = (state: StateInterface): KpiType => {
  return state.kpiOption;
};
export const { onKpiSelect, onKpiDelete } = kpiSlice.actions;

export default kpiSlice.reducer;
