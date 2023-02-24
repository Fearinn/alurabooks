import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import AskAccount from "../components/AskAccount";
import Banner from "../components/Banner";
import BookSection from "../components/BookSection";
import Loader from "../components/Loader";
import Newsletter from "../components/Newsletter";
import { getBestSellers, getReleasesBooks } from "../http";
import IBook from "../interfaces/Book";

function Home() {
  const {
    data: releases,
    isLoading: releasesLoading,
    error: releasesError,
  } = useQuery<IBook[], AxiosError>(["releases"], getReleasesBooks);
  const {
    data: bestSellers,
    isLoading: bestSellersLoading,
    error: bestSellersError,
  } = useQuery<IBook[], AxiosError>(["bestSellers"], getBestSellers);

  function HandleReleases() {
    if (releasesLoading) return <Loader />;
    if (releasesError || !releases)
      return <span role="alert">Oops, um erro inesperado aconteceu!</span>;
    return <BookSection title="Lançamentos" books={releases || []} />;
  }

  function HandleBestSellers() {
    if (bestSellersLoading) return <Loader />;
    if (bestSellersError || !bestSellers)
      return <span role="alert">Oops, um erro inesperado aconteceu!</span>;
    return <BookSection title="Mais vendidos" books={bestSellers || []} />;
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
