import { AbModal } from "alurabooks-ds-fearinn";
import { useTypedDispatch, useTypedSelector } from "../../utils/hooks";
import LoginForm from "../LoginForm";
import RegistrationForm from "../RegistrationForm";
import Categories from "./Categories";
import {
  StyledHeader,
  StyledUserOption,
  StyledModalContent,
} from "./StyledHeader";
import { Link, useNavigate } from "react-router-dom";
import { doLogin } from "../../store/reducers/login";
import {
  closeLoginModal,
  openLoginModal,
} from "../../store/reducers/loginModal";
import {
  closeRegistrationModal,
  openRegistrationModal,
} from "../../store/reducers/registrationModal";

function Header() {
  const registrationModal = useTypedSelector(
    (state) => state.registrationModal
  );
  const loginModal = useTypedSelector((state) => state.loginModal);
  const isLogged = useTypedSelector((state) => state.login);
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  function onCloseRegistrationModal() {
    dispatch(closeRegistrationModal());
  }

  function onCloseLoginModal() {
    dispatch(closeLoginModal());
  }

  function onLogin() {
    if (registrationModal) onCloseRegistrationModal();
    if (loginModal) onCloseLoginModal();
    dispatch(doLogin());
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
          {!isLogged ? (
            <>
              <StyledUserOption
                type="button"
                className="login"
                aria-haspopup="dialog"
                onClick={() => dispatch(openRegistrationModal())}
              >
                <div className="login-bg" />
                <span>Cadastre-se</span>
              </StyledUserOption>
              <StyledUserOption
                type="button"
                className="login"
                aria-haspopup="dialog"
                onClick={() => dispatch(openLoginModal())}
              >
                <div className="login-bg" />
                <span>Login</span>
              </StyledUserOption>
            </>
          ) : (
            <StyledUserOption
              type="button"
              className="login"
              aria-label="ir para 'minha conta'"
              onClick={() => navigate("minha-conta/pedidos")}
            >
              <div className="login-bg" />
              <span>Minha conta</span>
            </StyledUserOption>
          )}
        </nav>
      </StyledHeader>
      <AbModal
        title="Cadastro"
        onClose={onCloseRegistrationModal}
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
        onClose={onCloseLoginModal}
        htmlId="abmodal-cadastro-id"
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
