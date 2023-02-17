import axios, { AxiosError } from "axios";
import { useGetToken } from "../utils/hooks";

const http = axios.create({
  baseURL: "http://localhost:8000",
  headers: { Accept: "application/json", Content: "application/json" },
});

http.interceptors.request.use(
  (config) => {
    const token = useGetToken();
    if (token && config.headers)
      config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    console.log("Error with axios interceptor");
    return Promise.reject(error);
  }
);

http.interceptors.response.use((response) => {
  return response;
}, (error: AxiosError) => {
    if (error.response?.status === 401) {
        window.location.pathname = "/"
    }
    return Promise.reject(error)
});
export default http;
