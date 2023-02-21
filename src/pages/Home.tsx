import { useQuery } from "@tanstack/react-query";
import AskAccount from "../components/AskAccount";
import Banner from "../components/Banner";
import BookSection from "../components/BookSection";
import Loader from "../components/Loader";
import Newsletter from "../components/Newsletter";
import { getBestSellers, getReleasesBooks } from "../http";

function Home() {
  const { data: releases, isLoading: releasesLoading } = useQuery(
    ["releases"],
    () => getReleasesBooks()
  );
  const { data: bestSellers, isLoading: bestSellersLoading } = useQuery(
    ["bestSellers"],
    () => getBestSellers()
  );

  return (
    <>
      <main>
        <Banner />
        {releasesLoading ? (
          <Loader />
        ) : (
          <BookSection title="Lancamentos" books={releases || []} />
        )}
        {bestSellersLoading ? (
          <Loader />
        ) : (
          <BookSection title="Mais vendidos" books={bestSellers || []} />
        )}
        <AskAccount />
        <Newsletter />
      </main>
    </>
  );
}

export default Home;
