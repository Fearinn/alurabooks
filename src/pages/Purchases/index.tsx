import { AbButton } from "alurabooks-ds-fearinn";
import StyledPurchases from "./StyledPurchases";

function Purchases() {
  return (
    <StyledPurchases>
      <h2>Pedidos</h2>
      <div className="container">
        <ul>
          <li>
            <p>
              Pedido: <span>1</span>
            </p>
            <p>
              Data: <span>14/11/2016</span>
            </p>
            <p>
              Valor total: <span>R$ 70</span>
            </p>
            <p>
              Entrega realizada em: <span>25/11/2016</span>
            </p>
          </li>
        </ul>
        <AbButton text="Detalhes"/>
      </div>
    </StyledPurchases>
  );
}

export default Purchases
