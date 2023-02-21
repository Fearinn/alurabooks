import IPurchaseOption from "./PurchaseOption";

export default interface IBook {
  id: number;
  categoria: number;
  titulo: string;
  slug: string;
  descricao: string;
  isbn: string;
  numeroPaginas: number;
  publicacao: string;
  imagemCapa: string;
  autor: number;
  opcoesCompra: IPurchaseOption[];
  sobre: string;
}
