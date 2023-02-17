import { AbModal } from "alurabooks-ds-fearinn";
import { useState } from "react";
import { useGetToken } from "../../utils/hooks";
import LoginForm from "../LoginForm";
import RegistrationForm from "../RegistrationForm";
import Categories from "./Categories";
import { StyledHeader, StyledLogin, StyledModalContent } from "./StyledHeader";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [registrationModal, setRegistrationModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const token = useGetToken();
  const [logged, setLogged] = useState(!!token);
  const navigate = useNavigate();

  function closeRegistrationModal() {
    setRegistrationModal(false);
  }

  function closeLoginModal() {
    setLoginModal(false);
  }

  function onLogin() {
    if (registrationModal) closeRegistrationModal();
    if (loginModal) closeLoginModal();
    setLogged(true);
  }

  return (
    <>
      <StyledHeader>
        <Link to="/" className="logo">
          <div className="logo-image" />
          <h1>
            <span>Alura</span>Books
          </h1>
        </Link>
        <Categories />
        <nav className="user-navigation">
          {!logged ? (
            <>
              <StyledLogin
                type="button"
                className="login"
                aria-haspopup="dialog"
                onClick={() => setRegistrationModal(true)}
              >
                <div className="login-bg" />
                <span>Cadastre-se</span>
              </StyledLogin>
              <StyledLogin
                type="button"
                className="login"
                aria-haspopup="dialog"
                onClick={() => setLoginModal(true)}
              >
                <div className="login-bg" />
                <span>Login</span>
              </StyledLogin>
            </>
          ) : (
            <StyledLogin
              type="button"
              className="login"
              aria-label="ir para 'minha conta'"
              onClick={() => navigate("minha-conta/pedidos")}
            >
              <div className="login-bg" />
              <span>Minha conta</span>
            </StyledLogin>
          )}
        </nav>
      </StyledHeader>
      <AbModal
        title="Cadastro"
        onClose={closeRegistrationModal}
        htmlId="abmodal-login-id"
        open={registrationModal}
      >
        <StyledModalContent>
          <img alt="" src="/login-modal.svg" />
          <RegistrationForm onSubmit={onLogin} />
        </StyledModalContent>
      </AbModal>
      <AbModal
        title="Cadastro"
        onClose={closeLoginModal}
        htmlId="abmodal-login-id"
        open={loginModal}
      >
        <StyledModalContent>
          <img alt="" src="/login-modal.svg" />
          <LoginForm onSubmit={onLogin} />
        </StyledModalContent>
      </AbModal>
    </>
  );
}

export default Header;
