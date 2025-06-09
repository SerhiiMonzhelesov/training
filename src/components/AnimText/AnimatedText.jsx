import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const AnimatedText = ({ linkData, baseDelay = 0 }) => {
  return (
    <StyledLink to={linkData.url} target="_blank">
      {linkData.link_name.split("").map((char, i) => (
        <AnimatedLetter
          key={i}
          $delay={baseDelay + i * 0.035}
          $index={i}
          data-char={char}
        >
          {char === " " ? "\u00A0" : char}
        </AnimatedLetter>
      ))}
    </StyledLink>
  );
};

export default AnimatedText;

const animateLetter = keyframes`
  0% {
    transform: translateY(2em);
    filter: blur(4px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    filter: blur(0);
    opacity: 1;
  }
`;
const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: inline-block;

  span {
    position: relative;
  }

  &:hover span {
    transform: translateY(-100%);
    filter: blur(4px);
    opacity: 1;
    color: rgba(50, 47, 47, 0.87);

    &::after {
      content: attr(data-char);
      opacity: 1;
      transform: translateY(-100%);
      filter: blur(0px);
      font-weight: 700;
      color: black;
    }
  }
`;

const AnimatedLetter = styled.span`
  display: inline-block;
  position: relative;
  color: inherit;
  font-weight: 400;
  transform: translateY(1em);
  opacity: 0;
  animation: ${animateLetter} 0.6s ease-out forwards;
  animation-delay: ${({ $delay }) => $delay}s;
  transition: transform 0.6s ease, filter 0.6s ease, font-weight 0.6s ease,
    opacity 0.6s ease;

  &::after {
    content: attr(data-char);
    position: absolute;
    left: 0;
    top: 100%;
    opacity: 0;
    transform: translateY(0);
    filter: blur(4px);
    transition: transform 0.25s ease, filter 0.25s ease, font-weight 0.25s ease,
      opacity 0.25s ease;
    pointer-events: none;
  }

  ${({ $index }) => `&::after {
      transition-delay: ${$index * 0.03 + 0.01}s;
    }
  `}
`;
