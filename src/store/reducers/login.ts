import { useGetToken } from "../../utils/hooks";
import { createSlice } from "@reduxjs/toolkit";

const token = useGetToken();
const initialState = !!token;

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    doLogin: () => true,
    doLogout: () => false,
  },
});

export const { doLogin, doLogout } = loginSlice.actions;

export default loginSlice.reducer;
