import { configureStore, createSlice } from "@reduxjs/toolkit";
import modalReducer from "./modal-slice";
import authReducer from "./auth-slice";

const store = configureStore({
  reducer: { auth: authReducer, modal: modalReducer },
});

export default store;
