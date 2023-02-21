import { useQuery } from "@tanstack/react-query";
import { getBooksFromCategory } from "../../http";
import ICategory from "../../interfaces/Category";
import Loader from "../Loader";
import MiniBookCard from "../MiniBookCard";
import StyledListedBooks from "./StyledListedBooks";

function ListedBooks({ category }: { category: ICategory }) {
  const { data: books, isLoading } = useQuery(["booksByCategory", category], () =>
    getBooksFromCategory(category)
  );

  if (isLoading || !books) return <Loader />;
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
