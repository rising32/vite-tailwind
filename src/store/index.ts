import { configureStore } from '@reduxjs/toolkit';
import customizationReducer from './features/custom/customizationSlice';
import coreReducer from './features/core/Core';

export const store = configureStore({
  reducer: {
    customization: customizationReducer,
    core: coreReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
