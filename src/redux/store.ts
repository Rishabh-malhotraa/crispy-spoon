import { configureStore } from '@reduxjs/toolkit';
import KpiReducer from 'redux/slices/KPISlice';
import formReducer from 'redux/slices/formSlice';
import eventDefinationReducer from 'redux/slices/eventDefinationSlice';
import modelNameReducer from 'redux/slices/modelNameSlice';
import uuidReducer from 'redux/slices/uuidSlice';
import characterTableReducer from 'redux/slices/characterTableSlice';
import numericTableReducer from 'redux/slices/numericTableSlice';
import responseDataReducer from 'redux/slices/responseDataSlice';

const store = configureStore({
  reducer: {
    kpiOption: KpiReducer,
    formOption: formReducer,
    eventDefinationOption: eventDefinationReducer,
    modelNameOption: modelNameReducer,
    uuidOption: uuidReducer,
    KpiOption: KpiReducer,
    characterTableOption: characterTableReducer,
    numericTableOption: numericTableReducer,
    responseDataOption: responseDataReducer,
  },
});

export default store;
