import { useMutation, useQuery } from "@apollo/client";
import ICart, { ICartItem } from "../../interfaces/Cart";
import { ADD_ITEM, REMOVE_ITEM } from "./mutations";
import { GET_CART } from "./queries";

export function useCart() {
    return useQuery<{carrinho: ICart}>(GET_CART)
}

export function useAddItem() {
    return useMutation<ICartItem>(ADD_ITEM)
}

export function useRemoveItem() {
    return useMutation<ICartItem>(REMOVE_ITEM)
}