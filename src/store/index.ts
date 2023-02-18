import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./reducers/login";
import loginModalSlice from "./reducers/loginModal";
import registrationModalSlice from "./reducers/registrationModal";

const store = configureStore({
  reducer: {
    login: loginSlice,
    registrationModal: registrationModalSlice,
    loginModal: loginModalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
