import { useQuery } from "@tanstack/react-query";
import { AbButton, AbOptionsGroup, AbQuantity } from "alurabooks-ds-fearinn";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import MainTitle from "../../components/MainTitle";
import TextBlock from "../../components/TextBlock";
import { getBookById } from "../../http";
import StyledBookPage from "./StyledBookPage";

function BookDetails() {
  const { id } = useParams();

  const { data: book, isLoading } = useQuery(["bookById", id], () =>
    getBookById(Number(id))
  );

  if (!book || isLoading) return <Loader />;

  const options = book.opcoesCompra.map((opcao) => ({
    identificator: opcao.id,
    title: opcao.titulo,
    price: opcao.preco,
    formats: opcao.formatos || [],
  }));

  return (
    <main>
      <MainTitle title="Detalhes do livro" />
      <StyledBookPage>
        <div className="book-details">
          <img src={book.imagemCapa} alt={`Capa do livro ${book.titulo}`} />
          <div className="main-info">
            <h2>{book.titulo}</h2>
            <p>{book.descricao}</p>
            <span>Por: {book.autor}</span>
          </div>
          <div className="options">
            <h3>Selecione o seu livro</h3>
            <AbOptionsGroup options={options} />
            <span>* Você terá acesso a futuras atualizações do livro.</span>
            <AbQuantity />
            <AbButton text="Comprar" />
          </div>
        </div>
        <TextBlock title="Sobre o autor">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat
          quam vel lectus scelerisque, non elementum erat facilisis. Nulla elit
          purus, porta non dolor ut, facilisis consequat libero. Etiam id ornare
          sapien. Phasellus eget ligula ligula. Aliquam a augue a risus auctor
          ullamcorper quis ac risus. Morbi at augue a nulla mollis tristique.
          Nulla consequat odio urna, a vestibulum sapien mollis eget.
        </TextBlock>
        <TextBlock title="Sobre o livro">
          Curabitur neque erat, tincidunt hendrerit quam in, commodo molestie
          nibh. Vivamus nec lectus sed nunc posuere aliquet et et velit. Nullam
          sed lacus id tellus rutrum consequat quis at nisl. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Maecenas iaculis nulla eget lacus gravida pretium.
        </TextBlock>
      </StyledBookPage>
    </main>
  );
}

export default BookDetails;
