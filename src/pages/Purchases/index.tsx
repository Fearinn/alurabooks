import { AbButton } from "alurabooks-ds-fearinn";
import { useEffect, useState } from "react";
import { IPurchase } from "../../interfaces/IPurchases";
import { useGetToken } from "../../utils/hooks";
import http from "../../http"
import StyledPurchases from "./StyledPurchases";

function Purchases() {
  const [purchases, setPurchases] = useState<IPurchase[]>([]);
  const token = useGetToken();
  useEffect(() => {
    http
      .get<IPurchase[]>("pedidos", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setPurchases(response.data))
  }, []);

  return (
    <StyledPurchases>
      <>
        <h2>Pedidos</h2>
        <ul>
          {purchases.map((purchase) => {
            const date = new Date(purchase.data).toLocaleDateString();
            const entrega = new Date(purchase.entrega).toLocaleDateString();
            const total = Intl.NumberFormat("pt-br", {
              style: "currency",
              currency: "BRL",
            }).format(purchase.total);

            return (
              <li className="card" key={purchase.id}>
                <div className="purchase-info">
                  <p>
                    Pedido: <span>{purchase.id}</span>
                  </p>
                  <p>
                    Data: <span>{date}</span>
                  </p>
                  <p>
                    Valor total: <span>{total}</span>
                  </p>
                  <p>
                    Entrega realizada em: <span>{entrega}</span>
                  </p>
                </div>
                <AbButton text="Detalhes" />
              </li>
            );
          })}
        </ul>
      </>
    </StyledPurchases>
  );
}

export default Purchases;
