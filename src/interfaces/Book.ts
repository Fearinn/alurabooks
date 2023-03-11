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
  autor: IAuthor;
  opcoesCompra: IPurchaseOption[];
  sobre: string;
  tags: ITag[];
}

interface IAuthor {
  id: number;
  sobre: string;
  nome: string;
}

interface ITag {
  id: number;
  nome: string;
}
