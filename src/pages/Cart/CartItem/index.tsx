import { AbQuantity } from "alurabooks-ds-fearinn";
import { ICartItem } from "../../../interfaces/Cart";
import formatPrice from "../../../utils/formatPrice";
import { BsTrash } from "react-icons/bs";
import {
  useAddItem,
  useRemoveItem,
} from "../../../graphql/cart/hooks";
import { styledFontColor2 } from "../../../assets/variables";
import LoadingBlocker from "../../../components/LoadingBlocker";

function CartItem({ livro, quantidade, opcaoCompra }: ICartItem) {
  const formattedPrice = formatPrice(opcaoCompra.preco);

  const trashIcon = {
    size: 32,
    color: `${styledFontColor2}`,
    cursor: "pointer",
  };

  const [addItem, { loading: loadingAdd }] = useAddItem();
  const [removeItem, { loading: loadingRemove }] = useRemoveItem();

  function changeQuantity(quantity: number) {
    const item = {
      livroId: livro.id,
      opcaoCompraId: opcaoCompra.id,
      quantidade: quantity,
    };

    if (quantity <= 0) {
      removeItem({
        variables: {
          item,
        },
        refetchQueries: ["GetCart"],
      });
    }

    addItem({
      variables: {
        item,
      },
      refetchQueries: ["GetCart"],
    });
  }

  return (
    <>
      {(loadingAdd || loadingRemove) && <LoadingBlocker />}
      <li key={livro.id}>
        <div className="item-card">
          <div className="book">
            <img src={livro.imagemCapa} alt={`Capa de ${livro.titulo}`} />
            <div className="book-info">
              <h3>{livro.titulo}</h3>
              <p>{livro.descricao}</p>
              <p>Por: {livro.autor.nome}</p>
            </div>
          </div>
          <div className="purchase-details">
            <p className="price">
              <span className="price-label">Preço:</span>
              <span className="price-value">{formattedPrice}</span>
            </p>
            <AbQuantity
              initialQuantity={quantidade}
              onChangeQuantity={changeQuantity}
            />
            <BsTrash
              {...trashIcon}
              onClick={() =>
                removeItem({
                  variables: {
                    item: {
                      livroId: livro.id,
                      opcaoCompraId: opcaoCompra.id,
                      quantidade: quantidade,
                    },
                  },
                  refetchQueries: ["GetCart"],
                })
              }
            />
          </div>
        </div>
      </li>
    </>
  );
}

export default CartItem;
