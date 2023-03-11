import { useQuery, useReactiveVar } from "@apollo/client";
import IBook from "../../interfaces/Book";
import { GET_BOOKS, GET_BOOK_BY_SLUG, GET_FEATURED } from "./queries";
import { booksVar, bookFiltersVar } from "./state";

export function useBooks() {
  const filters = useReactiveVar(bookFiltersVar);
  return useQuery<{ livros: IBook[] }>(GET_BOOKS, {
    variables: {
      categoriaId: filters.categoria?.id,
      titulo: filters.titulo,
    },
    onCompleted(data) {
      if (data.livros) {
        booksVar(data.livros);
      }
    },
  });
}

export function useFeaturedBooks() {
  return useQuery<{
    destaques: { lancamentos: IBook[]; maisVendidos: IBook[] };
  }>(GET_FEATURED);
}

export function useSingleBook(slug: string) {
  return useQuery<{livro: IBook}>(GET_BOOK_BY_SLUG, { variables: { slug: slug } });
}
