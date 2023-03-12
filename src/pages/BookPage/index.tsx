import {
  AbButton,
  AbOptionsGroup,
  AbQuantity,
  AbTag,
} from "alurabooks-ds-fearinn";
import { IAbOption } from "alurabooks-ds-fearinn/dist/interfaces/Option";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import MainTitle from "../../components/MainTitle";
import TextBlock from "../../components/TextBlock";
import { useSingleBook } from "../../graphql/books/hooks";
import { useAddItem } from "../../graphql/cart/hooks";
import { ICartItem } from "../../interfaces/Cart";
import StyledBookPage from "./StyledBookPage";

function BookDetails() {
  const { slug } = useParams();

  const { data, loading, error } = useSingleBook(slug ?? "");

  const [addItemMutation] = useAddItem();

  const [option, setOption] = useState<IAbOption>();

  const [quantity, setQuantity] = useState(1);

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

  function addItem(item: ICartItem | null) {
    if (!item) {
      alert("Por favor, selecione uma opção de compra");
      return;
    }
    addItemMutation({
      variables: {
        item: {
          livroId: item.livro.id,
          opcaoCompraId: item.opcaoCompra.id,
          quantidade: item.quantidade,
        },
      },
    });
  }

  function buildCartItem(): ICartItem | null {
    if (!data?.livro || !option) return null;
    return {
      livro: data.livro,
      quantidade: quantity,
      opcaoCompra: {
        id: option.identificator,
        preco: option.price,
        titulo: option.title,
      },
    };
  }

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
            <AbOptionsGroup options={options} onSelectOption={setOption} />
            <span>* Você terá acesso a futuras atualizações do livro.</span>
            <AbQuantity
              initialQuantity={quantity}
              onChangeQuantity={setQuantity}
            />
            <AbButton text="Comprar" onClick={() => addItem(buildCartItem())} />
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
