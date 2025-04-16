import styled from "styled-components";
import Container from "../../shared/Container/Container";

export const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #c4b7b7;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  flex-direction: row-reverse;

  nav {
    display: flex;
    column-gap: 20px;
  }

  a {
    color: white;
  }

  a:hover {
    color: red;
  }
`;
