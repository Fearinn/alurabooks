import { makeVar } from "@apollo/client";
import IBook from "../../interfaces/Book";
import IBookFilters from "../../interfaces/BookFilters";

export const bookFiltersVar = makeVar<IBookFilters>({})
export const booksVar = makeVar<IBook[]>([])