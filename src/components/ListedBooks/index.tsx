import { useReactiveVar } from "@apollo/client";
import { AbInput } from "alurabooks-ds-fearinn";
import { useEffect, useState } from "react";
import { useBooks } from "../../graphql/books/hooks";
import { bookFiltersVar, booksVar } from "../../graphql/books/state";
import ICategory from "../../interfaces/Category";
import Loader from "../Loader";
import MiniBookCard from "../MiniBookCard";
import StyledListedBooks from "./StyledListedBooks";

function ListedBooks({ category }: { category: ICategory }) {
  const [search, setSearch] = useState("");
  const books = useReactiveVar(booksVar);

  const { loading, error } = useBooks();

  useEffect(() => {
    bookFiltersVar({
      categoria: category,
      titulo: search.length >= 3 ? search : "",
    });
  }, [search]);

  if (error || !books)
    return (
      <span role="alert">
        Oops, houve um erro inesperado! Aguarde e tente novamente.
      </span>
    );

  if (loading) return <Loader />;

  return (
    <StyledListedBooks>
      <AbInput
        htmlId={`search-book-category${category.id}`}
        onChange={setSearch}
        label="Busque um livro pelo título!"
        value={search}
      ></AbInput>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <MiniBookCard {...book} />
          </li>
        ))}
      </ul>
    </StyledListedBooks>
  );
}

export default ListedBooks;
