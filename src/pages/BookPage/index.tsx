import {
  AbButton,
  AbOptionsGroup,
  AbQuantity,
  AbTag,
} from "alurabooks-ds-fearinn";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import MainTitle from "../../components/MainTitle";
import TextBlock from "../../components/TextBlock";
import { useSingleBook } from "../../graphql/books/hooks";
import StyledBookPage from "./StyledBookPage";

function BookDetails() {
  const { slug } = useParams();

  const { data, loading, error } = useSingleBook(slug ?? "");

  if (error || !data) {
    if (error)
      return (
        <span role="alert">
          Oops, houve um erro inesperado! Aguarde e tente novamente.
        </span>
      );
    return <span role="alert">Oops, o livro não foi encontrado!</span>;
  }

  if (loading) return <Loader />;

  const options = data.livro.opcoesCompra.map((opcao) => ({
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
          <img
            src={data.livro.imagemCapa}
            alt={`Capa do livro ${data.livro.titulo}`}
          />
          <div className="main-info">
            <h2>{data.livro.titulo}</h2>
            <p>{data.livro.descricao}</p>
            <span>Por: {data.livro.autor.nome}</span>
          </div>
          <div className="options">
            <h3>Selecione o seu livro</h3>
            <AbOptionsGroup options={options} />
            <span>* Você terá acesso a futuras atualizações do livro.</span>
            <AbQuantity />
            <AbButton text="Comprar" />
          </div>
        </div>
        <div className="about">
          <TextBlock title="Sobre o autor">{data.livro.autor.sobre}</TextBlock>
          <TextBlock title="Sobre o livro">{data.livro.sobre}</TextBlock>
        </div>
        <ul className="tags">
          {data.livro.tags.map((tag) => {
            return (
              <li key={tag.id}>
                <AbTag>{tag.nome}</AbTag>
              </li>
            );
          })}
        </ul>
      </StyledBookPage>
    </main>
  );
}

export default BookDetails;
