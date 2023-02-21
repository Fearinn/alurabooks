import { useParams } from "react-router-dom";
import { getCategoryBySlug } from "../../http";
import Loader from "../../components/Loader";
import MainTitle from "../../components/MainTitle";
import { useQuery } from "@tanstack/react-query";
import ListedBooks from "../../components/ListedBooks";

function Category() {
  const { slug } = useParams();

  const { data: category, isLoading } = useQuery(["categoryBySlug", slug], () =>
    getCategoryBySlug(slug)
  );

  if (isLoading || !category) return <Loader />;

  return (
    <main>
      <MainTitle title={category.nome || ""} />
      <ListedBooks category={category} />
    </main>
  );
}

export default Category;
