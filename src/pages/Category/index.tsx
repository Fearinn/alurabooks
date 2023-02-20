import { useParams } from "react-router-dom";
import { getCategoryBySlug } from "../../http";
import Loader from "../../components/Loader";
import MainTitle from "../../components/MainTitle";
import { useQuery } from "@tanstack/react-query";

function Category() {
  const { slug } = useParams();

  const { data: category, isLoading } = useQuery(["categoryBySlug", slug], () =>
    getCategoryBySlug(slug)
  );

  if (isLoading) return <Loader />;

  return (
    <>
      <MainTitle title={category?.nome || ""} />
    </>
  );
}

export default Category;
