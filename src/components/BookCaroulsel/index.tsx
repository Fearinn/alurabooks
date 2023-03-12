import { useState } from "react";
import IBook from "../../interfaces/Book";
import IBookCarousel from "../../interfaces/BookCarousel";
import { StyledBookCarousel, StyledBookCover } from "./StyledBookCarousel";

function moveCarousel(array: IBook[], idPrevious: number, idBook: number) {
  if (array.length !== 3) return array

  if (idPrevious !== idBook) {
    const bookIndex = array.findIndex((item) => idBook === item.id);
    const previousIndex = array.findIndex((item) => idPrevious === item.id);

    const book = array[bookIndex];
    const previous = array[previousIndex];
    const lastIndex = array.length - 1;

    if (bookIndex === lastIndex) {
      array[bookIndex] = array[0];
      array[0] = previous;
      array[previousIndex] = book;
    }

    if (bookIndex === 0) {
      array[previousIndex] = array[0];
      array[0] = array[lastIndex];
      array[lastIndex] = previous;
    }
  }

  return array;
}

function BookCarousel({
  books: orignalBooks,
  select,
  previous,
}: IBookCarousel) {
  const [books, setBooks] = useState<IBook[]>(structuredClone(orignalBooks));
  return (
    <StyledBookCarousel>
      {books.map((book, _, books) => {
        return (
          <StyledBookCover
            selected={book.id === previous.id}
            className="book-cover"
            aria-label={`${book.titulo}. Detalhes abaixo.`}
            tabIndex={0}
            key={book.id}
            onFocus={() => {
              setTimeout(() => {
                setBooks(moveCarousel(books, previous.id, book.id));
                select(book);
              }, 200);
            }}
          >
            <img src={book.imagemCapa} alt={`capa de ${book.titulo}`} />
          </StyledBookCover>
        );
      })}
    </StyledBookCarousel>
  );
}

export default BookCarousel;
