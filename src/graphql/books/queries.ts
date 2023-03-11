import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query GetBooks($categoriaId: Int, $titulo: String) {
    livros(categoriaId: $categoriaId, titulo: $titulo) {
      id
      slug
      titulo
      imagemCapa
      opcoesCompra {
        id
        preco
      }
    }
  }
`;

export const GET_FEATURED = gql`
  query GetFeatured {
    destaques {
      lancamentos {
        id
        slug
        titulo
        imagemCapa
        descricao
        autor {
          id
          nome
        }
        opcoesCompra {
          id
          preco
        }
      }
      maisVendidos {
        id
        slug
        titulo
        imagemCapa
        descricao
        autor {
          id
          nome
        }
        opcoesCompra {
          id
          preco
        }
      }
    }
  }
`;

export const GET_BOOK_BY_SLUG = gql`
  query GetBookById($slug: String!) {
    livro(slug: $slug) {
      id
      slug
      titulo
      imagemCapa
      descricao
      sobre
      tags {
        id
        nome
      }
      autor {
        id
        nome
        sobre
      }
      opcoesCompra {
        id
        preco
        formatos
        titulo
      }
    }
  }
`;
