import { Link, useLocation } from "react-router-dom";
import StyledLateralNav from "./StyledLateralNav";
import "../../assets/myaccount.scss";

function LateralNav({ links }: { links: { name: string; href: string }[] }) {
  const location = useLocation();
  return (
    <StyledLateralNav>
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.href}
          className={location.pathname === link.href ? "active" : ""}
        >
          {link.name}
        </Link>
      ))}
    </StyledLateralNav>
  );
}

export default LateralNav;
