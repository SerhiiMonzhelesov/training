import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const AnimatedText = ({ linkData, baseDelay = 0 }) => {
  return (
    <StyledLink to={linkData.url} target="blank">
      {linkData.link_name.split("").map((char, i) => {
        return (
          <AnimatedLetter key={i} delay={baseDelay + i * 0.035}>
            {char === " " ? "\u00A0" : char}
          </AnimatedLetter>
        );
      })}
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

/*const AnimatedLetter = styled.span`
  display: inline-block;
  animation: ${animateLetter} 1s ease-out forwards;
  animation-delay: ${({ delay }) => delay}s;
`; */
const AnimatedLetter = styled.span`
  display: inline-block;
  color: inherit;
  opacity: 0;
  transform: translateY(1em);
  filter: blur(4px);
  animation: ${animateLetter} 0.6s ease-out forwards;
  animation-delay: ${({ delay }) => delay}s;
`;

const StyledLink = styled(Link)`
  color: inherit;

  &:hover {
    color: green;
  }
`;
