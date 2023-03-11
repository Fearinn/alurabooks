import { AbButton } from "alurabooks-ds-fearinn";
import IBook from "../../interfaces/Book";
import StyledBookCard from "./StyledBookCard";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import { styledFontColor2 } from "../../assets/variables";
import { useState } from "react";
import formatPrice from "../../utils/formatPrice";

const outline = {
  size: 48,
  color: styledFontColor2,
  cursor: "pointer",
};

const fillHeart = {
  ...outline,
  color: "red",
};

function BookCard({
  titulo,
  descricao,
  autor,
  favorite = false,
  opcoesCompra,
}: IBook & { favorite?: boolean }) {
  const [favorited, setFavorited] = useState(favorite);
  const price = opcoesCompra
    ? Math.min(...opcoesCompra.map((opcao) => opcao.preco))
    : 0;

  const formattedPrice = formatPrice(price);
  return (
    <StyledBookCard>
      <div className="book-info">
        <span className="book-label">Sobre o livro:</span>
        <h3 className="book-title">{titulo}</h3>
        <div className="book-details">
          <p>{descricao}</p>
          <p>Por: {autor.nome}</p>
        </div>
        <div className="book-price">
          <span>A partir de:</span>
          <span>{formattedPrice}</span>
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
