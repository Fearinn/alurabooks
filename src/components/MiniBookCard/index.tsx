import { AbButton } from "alurabooks-ds-fearinn";
import IBook from "../../interfaces/Book";
import StyledMiniBookCard from "./StyledMiniBookCard";

function MiniBookCard({ titulo, opcoesCompra, imagemCapa }: IBook) {
  const price = opcoesCompra
    ? Math.min(...opcoesCompra.map((opcao) => opcao.preco))
    : 0;
  return (
    <StyledMiniBookCard>
      <img src={imagemCapa} alt={`Capa do livro ${titulo}`} />
      <h2>{titulo}</h2>
      <div>
        <span>A partir de:</span>
        <span className="price-value">{price}</span>
      </div>
      <AbButton text="Comprar" />
    </StyledMiniBookCard>
  );
}

export default MiniBookCard;
