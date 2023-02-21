import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import http from "../../../http";
import ICategory from "../../../interfaces/Category";
import StyledCategories from "./StyledCategories";

function Categories() {
  const categoryRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState<ICategory[]>([]);

  let alreadyMounted = false;

  useEffect(() => {
    if (alreadyMounted) return;

    http.get<ICategory[]>("/categorias").then((response) => {
      setCategories(response.data);
    });

    alreadyMounted = true;

    document.addEventListener("click", (event) => {
      if (
        event.target instanceof HTMLElement &&
        !categoryRef.current?.contains(event.target) &&
        categoryRef.current !== event.target
      ) {
        setOpen(false);
      }
    });
  }, []);

  return (
    <StyledCategories open={open} ref={categoryRef}>
      <button
        className="main-button"
        type="button"
        onClick={() => setOpen(!open)}
        aria-haspopup="menu"
        aria-pressed={open}
      >
        <span className="categories-long">Categorias</span>
        <span className="categories-hamburger">
          <svg
            width="36"
            height="24"
            viewBox="0 0 36 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 24H36V20H0V24ZM0 14H36V10H0V14ZM0 0V4H36V0H0Z"
              fill="black"
            />
          </svg>
        </span>
      </button>
      {open && (
        <nav>
          {categories.map((category) => (
            <Link key={category.id} to={`categorias/${category.slug}`}>
              {category.nome}
            </Link>
          ))}
        </nav>
      )}
    </StyledCategories>
  );
}

export default Categories;
