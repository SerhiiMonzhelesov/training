import { NavLink, Link } from "react-router-dom";
import { StyledHeader } from "./Header.styled";
import Container from "../../shared/Container/Container";

function Header() {
  return (
    <StyledHeader>
      <Container>
        <nav>
          <Link to={"https://www.google.com"} target="blank">
            fgdfgdf
          </Link>
        </nav>
      </Container>
    </StyledHeader>
  );
}

export default Header;
