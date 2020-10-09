import { configureStore } from '@reduxjs/toolkit';
import KPIReducer from './slices/KPISlice';
import formReducer from './slices/formSlice';
import eventDefinationReducer from './slices/eventDefinationSlice';
import modelNameReducer from './slices/modelNameSlice';

const store = configureStore({
  reducer: {
    kpiOption: KPIReducer,
    formOption: formReducer,
    eventDefinationOption: eventDefinationReducer,
    modeNameOption: modelNameReducer,
  },
});

export default store;
