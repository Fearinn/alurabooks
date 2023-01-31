import { AbButton } from "alurabooks-ds-fearinn";
import IBook from "../../interfaces/Book";
import StyledBookCard from "./StyledBookCard";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import { styledFontColor2 } from "../../assets/variables";
import { useState } from "react";

const outline = {
  size: 48,
  color: styledFontColor2,
  cursor: "pointer",
};

const fillHeart = {
  ...outline,
  color: "red",
};

function BookCard({ title, summary, author, favorite = false, price }: IBook) {
  const [favorited, setFavorited] = useState(favorite);
  return (
    <StyledBookCard>
      <div className="book-info">
        <span className="book-label">Sobre o livro:</span>
        <h3 className="book-title">{title}</h3>
        <div className="book-details">
          <p>{summary}</p>
          <p>Por: {author}</p>
        </div>
        <div className="book-price">
          <span>A partir de:</span>
          <span>R${price.toFixed(2).toString().padStart(2, "0")}</span>
        </div>
      </div>
      <div className="book-options">
        <div className="book-icons">
          <MdOutlineShoppingBag {...outline} />
          {favorited ? (
            <AiFillHeart
              {...fillHeart}
              onClick={() => {
                setFavorited(!favorited);
              }}
            />
          ) : (
            <AiOutlineHeart
              {...outline}
              onClick={() => {
                setFavorited(!favorited);
              }}
            />
          )}
        </div>
        <AbButton text="Comprar" />
      </div>
    </StyledBookCard>
  );
}

export default BookCard;
