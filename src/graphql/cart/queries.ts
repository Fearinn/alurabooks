import { gql } from "@apollo/client";

export const GET_CART = gql`
  query GetCart {
    carrinho {
      total
      itens {
        quantidade
        opcaoCompra {
          id
          preco
        }
        livro {
          id
          titulo
          descricao
          imagemCapa
          autor {
            nome
          }
        }
      }
    }
  }
`;
