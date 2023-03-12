import IBook from "./Book"
import IPurchaseOption from "./PurchaseOption"

export default interface ICart {
    total: number,
    itens: ICartItem[]
}

export interface ICartItem {
    livro: IBook,
    opcaoCompra: IPurchaseOption,
    quantidade: number
}