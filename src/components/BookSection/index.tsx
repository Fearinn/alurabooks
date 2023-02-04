import { AbCard } from "alurabooks-ds-fearinn";
import { useState } from "react";
import IBook from "../../interfaces/Book";
import IBookSection from "../../interfaces/BookSection";
import BookCard from "../BookCard";
import BookCarousel from "../BookCaroulsel";
import StyledSection from "./StyledSection";

function BookSection({ title, books }: IBookSection) {
  const [bookSelected, setBookSelected] = useState<IBook>(books[1]);
  return (
    <StyledSection>
      <h2>{title}</h2>
      <div className="books">
        <BookCarousel books={books} select={setBookSelected} previous={bookSelected}/>
        {books.map((book) => {
          return (
            book.id === bookSelected.id && (
              <AbCard key={book.id} className="abcard">
                <BookCard {...book} />
              </AbCard>
            )
          );
        })}
      </div>
    </StyledSection>
  );
}

export default BookSection;
