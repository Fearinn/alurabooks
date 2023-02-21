import axios, { AxiosError } from "axios";
import IBook from "../interfaces/Book";
import ICategory from "../interfaces/Category";
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

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      window.location.pathname = "/";
    }
    return Promise.reject(error);
  }
);
export default http;

export const getCategoryBySlug = async (slug: string | undefined) => {
  if (!slug) return;
  const response = await http.get<ICategory[]>("/categorias", {
    params: { slug },
  });

  return response.data[0];
};

export const getReleasesBooks = async () => {
  const response = await http.get<IBook[]>("/public/lancamentos");
  console.log(response.data)
  return response.data
};

export const getBestSellers = async () => {
  const response = await http.get<IBook[]>("/public/mais-vendidos");
  console.log(response.data)
  return response.data;
};
