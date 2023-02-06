import { AbButton } from "alurabooks-ds-fearinn";
import StyledAskAccount from "./StyledAskAccount";

function AskAccount() {
  return (
    <StyledAskAccount>
      <div className="text">
        <h2>Já possui uma conta?</h2>
        <p>
          Com uma conta, você pode criar sua própria estante de livros e e-books
        </p>
      </div>
      <div className="buttons">
        <AbButton text="Criar conta" customType="secondary" />
        <AbButton text="Fazer login" />
      </div>
    </StyledAskAccount>
  );
}

export default AskAccount;
