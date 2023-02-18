import { createSlice } from "@reduxjs/toolkit";

const initialState = false

const loginModalSlice = createSlice({
    name: "loginModal",
    initialState,
    reducers: {
        openLoginModal: () => true,
        closeLoginModal: () => false
    }
})

export const {openLoginModal, closeLoginModal} = loginModalSlice.actions

export default loginModalSlice.reducer