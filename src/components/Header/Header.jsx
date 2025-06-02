import { StyledHeader } from "./Header.styled";
import { HeaderContainer } from "./Header.styled";
import { useEffect, useState } from "react";
import AnimatedText from "../AnimText/AnimatedText";
import headerNavData from "../../constans/headerNavData";

function Header() {
  const fullText = "Serhii Monzhelesov";
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const typeNext = (index) => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        const randomDelay = Math.floor(Math.random() * 1) + 150;
        setTimeout(() => typeNext(index + 1), randomDelay);
      } else {
        setTimeout(() => setShowCursor(false), 2000);
      }
    };

    typeNext(1);

    return () => {};
  }, []);

  let accumulatedDelay = 0;

  return (
    <StyledHeader>
      <HeaderContainer>
        <p className="typewriter">
          {displayedText.split("").map((char, idx) => (
            <span className="letter" key={idx}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
          {showCursor && <span className="cursor"></span>}
        </p>
        <nav>
          {headerNavData.map((item, index) => {
            const component = (
              <AnimatedText
                key={index}
                linkData={item}
                baseDelay={accumulatedDelay}
              />
            );
            accumulatedDelay += item.link_name.length * 0.035;
            return component;
          })}
        </nav>
      </HeaderContainer>
    </StyledHeader>
  );
}

export default Header;
