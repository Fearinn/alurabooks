import { AbModal } from "alurabooks-ds-fearinn";
import { useState } from "react";
import Categories from "./Categories";
import { StyledHeader, StyledLogin } from "./StyledHeader";

function Header() {
  const [modal, setModal] = useState(false);
  
  function closeModal() {
    setModal(false)
  }

  return (
    <>
      <StyledHeader>
        <div className="logo">
          <div className="logo-image" />
          <h1>
            <span>Alura</span>Books
          </h1>
        </div>
        <Categories />
        <nav className="user-navigation">
          <StyledLogin
            type="button"
            className="login"
            onClick={() => setModal(true)}
          >
            <div className="login-bg" />
            <span>Login</span>
          </StyledLogin>
        </nav>
      </StyledHeader>
      <AbModal title="login" whenClosed={closeModal} htmlId="abmodal-login-id" open={modal}/>
    </>
  );
}

export default Header;
