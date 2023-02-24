import { AbButton } from "alurabooks-ds-fearinn";
import { Link } from "react-router-dom";
import IBook from "../../interfaces/Book";
import formatPrice from "../../utils/formatPrice";
import StyledMiniBookCard from "./StyledMiniBookCard";

function MiniBookCard({ titulo, opcoesCompra, imagemCapa, id }: IBook) {
  const price = opcoesCompra
    ? Math.min(...opcoesCompra.map((opcao) => opcao.preco))
    : 0;

  const formattedPrice = formatPrice(price)
  return (
    <StyledMiniBookCard>
      <img src={imagemCapa} alt={`Capa do livro ${titulo}`} />
      <h2>{titulo}</h2>
      <div>
        <span>A partir de:</span>
        <span className="price-value">{formattedPrice}</span>
      </div>
      <Link to={`/livro/${id}`}>
        <AbButton text="Comprar"></AbButton>
      </Link>
    </StyledMiniBookCard>
  );
}

export default MiniBookCard;
