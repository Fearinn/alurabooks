import { AbModal } from "alurabooks-ds-fearinn";
import { useState } from "react";
import RegistrationForm from "../RegistrationForm";
import Categories from "./Categories";
import { StyledHeader, StyledLogin, StyledModalContent } from "./StyledHeader";

function Header() {
  const [modal, setModal] = useState(false);

  function closeModal() {
    setModal(false);
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
      <AbModal
        title="Cadastro"
        onClose={closeModal}
        htmlId="abmodal-login-id"
        open={modal}
      >
        <StyledModalContent>
          <img alt="" src="/login-modal.svg"/>
          <RegistrationForm onSubmit={closeModal}/>
        </StyledModalContent>
      </AbModal>
    </>
  );
}

export default Header;
