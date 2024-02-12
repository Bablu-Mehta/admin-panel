import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  admin: "admin@gmail.com",
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      if (action.payload === state.admin) {
        state.isAuth = true;
      }
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});

const store = configureStore({
  reducer: authSlice.reducer,
});

export const authActions = authSlice.actions;
export default store;
