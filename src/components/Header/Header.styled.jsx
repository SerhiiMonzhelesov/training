import styled, { keyframes } from "styled-components";
import Container from "../../shared/Container/Container";

export const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #c4b7b7;
`;

const blink = keyframes`
  50% {
    opacity: 0;
  }
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  p {
    font-size: 24px;
    font-weight: 500;
    //color: white;
  }

  .typewriter {
    display: inline-flex;
    align-items: center;
    position: relative;
  }

  .letter {
    opacity: 1;
    transition: opacity 0.3s;
  }

  .cursor {
    width: 1ch;
    height: 1.2em;
    background-color: black;
    margin-left: 2px;
    animation: ${blink} 450ms step-start infinite;
  }

  nav {
    display: flex;
    align-items: center;
    column-gap: 20px;
  }

  a {
    //color: white;
  }

  a:hover {
    color: red;
  }
`;
