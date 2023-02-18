import { TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import { AppDispatch, RootState } from "../store";

export const useSaveToken = () => {
  return (token: string) => {
    sessionStorage.setItem("token", token);
  };
};

export const useGetToken = () => {
  return sessionStorage.getItem("token");
};

export const useClearToken = () => {
  sessionStorage.removeItem("token");
};

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useTypedDispatch: () => AppDispatch = useDispatch;
