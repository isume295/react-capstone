import { configureStore } from '@reduxjs/toolkit';
import financeReducer from './finance/FinanceSlice';

const store = configureStore({
  reducer: {
    finance: financeReducer,
  },
});

export default store;
