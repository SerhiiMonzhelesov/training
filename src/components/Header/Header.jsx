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
        //setTimeout(() => typeNext(index + 1), 120);
        const randomDelay = Math.floor(Math.random() * 1) + 150; // від 100 до 400 мс
        setTimeout(() => typeNext(index + 1), randomDelay);
      } else {
        setTimeout(() => setShowCursor(false), 2000);
      }
    };

    typeNext(1); // починаємо з першої букви

    return () => {}; // нічого не очищаємо
  }, []);

  let accumulatedDelay = 0;

  return (
    <StyledHeader>
      <HeaderContainer>
        <p className="typewriter">
          {displayedText.split("").map((char, idx) => (
            <span className="letter" key={idx}>
              {char === " " ? "\u00A0" : char}
            </span> // правильне виведення пробілу
          ))}
          {showCursor && <span className="cursor"></span>}
        </p>
        <nav>
          {/*<AnimatedText text="Portfolio" />*/}
          {/*headerNavData.map((item, i) => {
            return <AnimatedText key={i} text={item.link_name} test={i} />;
          })*/}
          {headerNavData.map((item, index) => {
            const component = (
              <AnimatedText
                key={index}
                linkData={item}
                baseDelay={accumulatedDelay}
              />
            );
            // Оновлюємо затримку для наступного слова
            accumulatedDelay += item.link_name.length * 0.035;
            return component;
          })}
          {/*
            <Link to={"https://www.google.com"} target="blank">
              Portfolio
            </Link>
          */}
        </nav>
      </HeaderContainer>
    </StyledHeader>
  );
}

export default Header;
