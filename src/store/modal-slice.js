import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { isOpen: false, isClose: false },
  reducers: {
    openModal(state) {
      state.isOpen = true;
      state.isClose = false;
    },
    closeModal(state) {
      state.isClose = true;
      state.isOpen = false;
    },
  },
});

export default modalSlice.reducer;
export const modalActions = modalSlice.actions;
