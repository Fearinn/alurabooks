import { gql } from "@apollo/client";

export const ADD_ITEM = gql`
  mutation AddItem($item: ItemCarrinhoInput!) {
    adicionarItem(item: $item)
  }
`;

export const REMOVE_ITEM = gql`
  mutation RemoveItem($item: ItemCarrinhoInput!) {
    removerItem(item: $item)
  }
`;
