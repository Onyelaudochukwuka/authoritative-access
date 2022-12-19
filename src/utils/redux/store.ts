import { configureStore } from '@reduxjs/toolkit';

import AppSlice from './appSlice';

const store = configureStore({
  reducer: {
    [AppSlice.name]: AppSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
