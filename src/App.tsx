import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Purchases from "./pages/Purchases";
import MyAccount from "./pages/MyAccount/MyAccount";
import Category from "./pages/Category";
import DefaultPage from "./pages/DefaultPage";
import BookPage from "./pages/BookPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="minha-conta" element={<MyAccount />}>
            <Route path="pedidos" element={<Purchases />} />
          </Route>
          <Route path="categorias/:slug" element={<Category />} />
          <Route path="livro/:slug" element={<BookPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
