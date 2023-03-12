import AskAccount from "../components/AskAccount";
import Banner from "../components/Banner";
import BookSection from "../components/BookSection";
import Loader from "../components/Loader";
import Newsletter from "../components/Newsletter";
import { useFeaturedBooks } from "../graphql/books/hooks";

function Home() {
  const { data, loading, error } = useFeaturedBooks();

  function HandleReleases() {
    if (loading) return <Loader />;

    if (error || !data) {
      return <span role="alert">Oops, um erro inesperado aconteceu!</span>;
    }

    return (
      <BookSection
        title="Lançamentos"
        books={data.destaques.lancamentos || []}
      />
    );
  }

  function HandleBestSellers() {
    if (loading) return <Loader />;

    if (error || !data) {
      return <span role="alert">Oops, um erro inesperado aconteceu!</span>;
    }

    return (
      <BookSection
        title="Mais vendidos"
        books={data.destaques.maisVendidos || []}
      />
    );
  }

  return (
    <>
      <main>
        <Banner />
        {HandleReleases()}
        {HandleBestSellers()}
        <AskAccount />
        <Newsletter />
      </main>
    </>
  );
}

export default Home;
