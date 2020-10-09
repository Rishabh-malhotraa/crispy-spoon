import { configureStore } from '@reduxjs/toolkit';
import KpiReducer from 'redux/slices/KPISlice';
import formReducer from 'redux/slices/formSlice';
import eventDefinationReducer from 'redux/slices/eventDefinationSlice';
import modelNameReducer from 'redux/slices/modelNameSlice';
import uuidReducer from 'redux/slices/uuidSlice';

const store = configureStore({
  reducer: {
    kpiOption: KpiReducer,
    formOption: formReducer,
    eventDefinationOption: eventDefinationReducer,
    modelNameOption: modelNameReducer,
    uuidOption: uuidReducer,
    KpiOption: KpiReducer,
  },
});

export default store;
