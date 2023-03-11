import { useQuery } from "@apollo/client";
import ICategory from "../../interfaces/Category";
import { GET_CATEGORIES } from "./queries";

export function useCategories() {
    return useQuery<{categorias: ICategory[]}>(GET_CATEGORIES)
}