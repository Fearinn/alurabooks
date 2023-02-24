import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getBooksFromCategory } from "../../http";
import IBook from "../../interfaces/Book";
import ICategory from "../../interfaces/Category";
import Loader from "../Loader";
import MiniBookCard from "../MiniBookCard";
import StyledListedBooks from "./StyledListedBooks";

function ListedBooks({ category }: { category: ICategory }) {
  const { data: books, isLoading, error } = useQuery<IBook[], AxiosError>(["booksByCategory", category], () =>
    getBooksFromCategory(category)
  );

  if (error || !books) return <span role="alert">Oops, houve um erro inesperado! Aguarde e tente novamente.</span>

  if (isLoading) return <Loader />;
  return (
    <StyledListedBooks>
      {books.map((book) => (
        <li key={book.id}>
          <MiniBookCard {...book} />
        </li>
      ))}
    </StyledListedBooks>
  );
}

export default ListedBooks;
