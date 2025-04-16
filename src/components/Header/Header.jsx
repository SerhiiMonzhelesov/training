import { NavLink, Link } from "react-router-dom";
import { StyledHeader } from "./Header.styled";
import { HeaderContainer } from "./Header.styled";

function Header() {
  return (
    <StyledHeader>
      <HeaderContainer>
        <nav>
          <Link to={"https://www.google.com"} target="blank">
            Portfolio
          </Link>
          <Link to={"https://www.google.com"} target="blank">
            Work experience
          </Link>
          <Link to={"https://www.google.com"} target="blank">
            Education
          </Link>
          <Link to={"https://www.google.com"} target="blank">
            Skills
          </Link>
        </nav>
      </HeaderContainer>
    </StyledHeader>
  );
}

export default Header;
