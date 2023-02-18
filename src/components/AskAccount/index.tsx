import { AbButton } from "alurabooks-ds-fearinn";
import { openLoginModal } from "../../store/reducers/loginModal";
import { openRegistrationModal } from "../../store/reducers/registrationModal";
import { useTypedDispatch } from "../../utils/hooks";
import StyledAskAccount from "./StyledAskAccount";

function AskAccount() {
  const dispatch = useTypedDispatch();
  return (
    <StyledAskAccount>
      <div className="text">
        <h2>Já possui uma conta?</h2>
        <p>
          Com uma conta, você pode criar sua própria estante de livros e e-books
        </p>
      </div>
      <div className="buttons">
        <AbButton
          text="Criar conta"
          customType="secondary"
          onClick={() => dispatch(openRegistrationModal())}
        />
        <AbButton
          text="Fazer login"
          onClick={() => dispatch(openLoginModal())}
        />
      </div>
    </StyledAskAccount>
  );
}

export default AskAccount;
