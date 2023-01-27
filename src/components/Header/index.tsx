import Categories from "./Categories";
import { StyledHeader, StyledLogin } from "./StyledHeader";

function Header() {
  return (
    <StyledHeader>
      <div className="logo">
        <div className="logo-image" />
        <h1>
          <span>Alura</span>Books
        </h1>
      </div>
      <Categories />
      <nav className="user-navigation">
        <StyledLogin type="button" className="login">
          <div className="login-bg" />
          <span>Login</span>
        </StyledLogin>
      </nav>
    </StyledHeader>
  );
}

export default Header;
