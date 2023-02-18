import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const registrationModalSlice = createSlice({
  name: "registrationModal",
  initialState,
  reducers: {
    openRegistrationModal: () => true,
    closeRegistrationModal: () => false,
  },
});

export const { openRegistrationModal, closeRegistrationModal } =
  registrationModalSlice.actions;

export default registrationModalSlice.reducer;
