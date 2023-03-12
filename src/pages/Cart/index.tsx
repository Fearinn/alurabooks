import { AbButton } from "alurabooks-ds-fearinn";
import { useCart } from "../../graphql/cart/hooks";
import StyledCart from "./StyledCart";
import MainTitle from "../../components/MainTitle";
import formatPrice from "../../utils/formatPrice";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import LoadingBlocker from "../../components/LoadingBlocker";

function Cart() {
  const { data, loading, error } = useCart();

  if (loading) return <LoadingBlocker />;

  if (!data || error)
    return <span role="alert">Oops! Houve um erro inesperado!</span>;

  const formattedTotal = formatPrice(data?.carrinho.total);

  return (
    <main>
      <MainTitle title="Minha sacola" />
      <StyledCart>
        <h2>Itens selecionados</h2>
        <ul>
          {data.carrinho.itens.map((item) => {
            return (
              <CartItem
                {...item}
                key={`${item.livro.id}${item.opcaoCompra.id}`}
              />
            );
          })}
          <li>
            <Link to="/">Continuar comprando</Link>
          </li>
        </ul>
        <div className="purchase-confirmation">
          <p>
            Total da compra: <span>{formattedTotal}</span>
          </p>
          <AbButton text="Comprar" />
        </div>
      </StyledCart>
    </main>
  );
}

export default Cart;
