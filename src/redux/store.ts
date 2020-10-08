import { configureStore } from '@reduxjs/toolkit';
import KPIReducer from './slices/KPISlice';
import formReducer from './slices/formSlice';

const store = configureStore({
  reducer: {
    kpiOption: KPIReducer,
    formOption: formReducer,
  },
});

export default store;
