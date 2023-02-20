import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Purchases from "./pages/Purchases";
import MyAccount from "./pages/MyAccount/MyAccount";
import Category from "./pages/Category";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="minha-conta" element={<MyAccount />}>
          <Route path="pedidos" element={<Purchases/>}/>
        </Route>
        <Route path="categorias/:slug" element={<Category/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
