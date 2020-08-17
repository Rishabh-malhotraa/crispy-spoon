import { configureStore } from '@reduxjs/toolkit';
import formReducer from './reducers/form/formSlice';

const store = configureStore({
  reducer: {
    formOption: formReducer,
  },
});

export default store;
