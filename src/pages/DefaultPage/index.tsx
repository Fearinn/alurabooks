import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

function DefaultPage() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default DefaultPage;
