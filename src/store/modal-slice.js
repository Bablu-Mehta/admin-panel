import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { isOpen: false, isClose: false },
  reducers: {
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isClose = true;
    },
  },
});

export default modalSlice.reducer;
export const modalActions = modalSlice.actions;
