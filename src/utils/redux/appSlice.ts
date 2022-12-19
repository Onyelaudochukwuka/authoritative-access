import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
  loggedIn: boolean;
  level: number;
  width: number;
}
const initialState: AppState = {
  loggedIn: false,
  level: Number(window.localStorage.getItem('level')) || 4,
  width: 0,
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
    width(state: AppState, action: PayloadAction<number>) {
      state.width = action.payload;
    },
  },
});
export const { auth, level, width } = AppSlice.actions;
export default AppSlice;
