import { AbInput } from "alurabooks-ds-fearinn";
import StyledNewsletter from "./StyledNewsletter";

function Newsletter() {
  return (
    <StyledNewsletter>
      <div className="text">
        <h2>Fique por dentro das novidades!</h2>
        <p>
          Com um conta você pode criar sua própria estante de livros e e-books.
        </p>
      </div>
      <form>
      <AbInput label="E-mail para newsletter" id="newsletter-input" type="text" className="" placeholder="Cadastre seu email"/>
      </form>
    </StyledNewsletter>
  );
}

export default Newsletter;
