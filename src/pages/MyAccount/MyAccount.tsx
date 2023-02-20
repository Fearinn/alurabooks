import { Outlet } from "react-router-dom";
import LateralNav from "../../components/LateralNav";
import MainTitle from "../../components/MainTitle";
import StyledMyAccount from "./StyledMyAccount";

const links = [
  { name: "Pedidos", href: "pedidos" },
  { name: "Trocas", href: "trocas" },
  { name: "Cupons", href: "cupons" },
  { name: "Dados", href: "dados" },
];

function MyAccount() {
  return (
    <StyledMyAccount>
      <MainTitle title="Minha conta"/>
      <main>
        <LateralNav links={links} />
        <Outlet />
      </main>
    </StyledMyAccount>
  );
}

export default MyAccount;
