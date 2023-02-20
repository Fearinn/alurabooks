import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../../http";
import ICategory from "../../interfaces/Category";
import Loader from "../../components/Loader";
import MainTitle from "../../components/MainTitle";

function Category() {
  const [category, setCategory] = useState<ICategory>();
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    setIsLoading(true);
    http
      .get<ICategory[]>("/categorias", { params: { slug } })
      .then((response) => {
        setCategory(response.data[0]);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Loader />;

  return (
    <>
      <MainTitle title={category?.nome || ""} />
    </>
  );
}

export default Category;
