import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
  loggedIn: boolean;
  level: number;
}
const initialState: AppState = {
  loggedIn: false,
  level: 0,
};

const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    auth(state: AppState, action: PayloadAction<boolean>) {
      state.loggedIn = action.payload;
    },
    level(state: AppState, action: PayloadAction<number>) {
      state.level = action.payload;
    },
  },
});
export const { auth, level } = AppSlice.actions;
export default AppSlice;
