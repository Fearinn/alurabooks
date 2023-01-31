import Banner from "./components/Banner";
import Header from "./components/Header";
import BookSection from "./components/BookSection";
import IBook from "./interfaces/Book";
import IBookSection from "./interfaces/BookSection";

const lancamentos: IBook[] = [
  {
    author: "Tárcio Zemel",
    summary: "Técnicas e ferramentas que fazem a diferença nos seus estilos",
    img: "https://github.com/alura-cursos/curso-react-alurabooks/blob/main/public/imagens/livros/css.jpg?raw=true",
    title: "CSS Eficiente",
    price: 29.9,
    id: 1,
  },
  {
    title: "Sass",
    summary: "Aprendendo pré-processadores CSS",
    img: "https://github.com/alura-cursos/curso-react-alurabooks/blob/main/public/imagens/livros/sass.jpg?raw=true",
    author: "Natan Souza",
    price: 29.9,
    id: 2,
  },
  {
    author: "Diego Eis",
    summary: "O caminho das pedras para ser um dev Front-End",
    img: "https://github.com/alura-cursos/curso-react-alurabooks/blob/main/public/imagens/livros/frontend.jpg?raw=true",
    title: "Guia Front-End",
    price: 29.9,
    id: 3,
  },
];

const maisVendidos: IBook[] = [
  {
    author: "Thiago da Silva Adriano",
    summary: "Melhore suas aplicações JavaScript",
    img: "https://github.com/alura-cursos/curso-react-alurabooks/blob/main/public/imagens/livros/typescript.jpg?raw=true",
    title: "Guia prático de TypeScript",
    price: 29.9,
    id: 1,
  },
  {
    author: "Akira Hanashiro",
    summary:
      "A revolucionária linguagem de consulta e manipulação de dados para APIs",
    img: "https://github.com/alura-cursos/curso-react-alurabooks/blob/main/public/imagens/livros/graphql.jpg?raw=true",
    title: "GraphQL",
    price: 29.9,
    id: 2,
  },
  {
    author: "Vinícius Carvalho",
    summary: "PostgreSQL",
    img: "https://github.com/alura-cursos/curso-react-alurabooks/blob/main/public/imagens/livros/postgre.jpg?raw=true",
    title: "PostgreSQL",
    price: 29.9,
    id: 3,
  },
];

const sections: IBookSection[] = [
  {
    title: "Lançamentos",
    books: lancamentos,
  },
  { title: "Mais vendidos", books: maisVendidos },
];

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        {sections.map((section) => {
          return (
            <BookSection
              key={section.title}
              title={section.title}
              books={section.books}
            />
          );
        })}
      </main>
    </>
  );
}

export default App;
