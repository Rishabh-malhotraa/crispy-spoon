import { configureStore } from '@reduxjs/toolkit';
import formReducer from './slices/formSlice';

const store = configureStore({
  reducer: {
    formOption: formReducer,
  },
});

export default store;
