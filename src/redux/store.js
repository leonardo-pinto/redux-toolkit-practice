import { configureStore } from '@reduxjs/toolkit';
import counter from './slices/counter';
import forms from './slices/forms';
import requisition from './slices/requisition';

export const store = configureStore({
  reducer: {
    counter,
    forms,
    requisition,
  },
});

// This creates a Redux store, and also automatically configure the Redux DevTools extension so that you can inspect the store while developing.
