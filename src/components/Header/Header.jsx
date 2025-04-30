import { NavLink, Link } from "react-router-dom";
import { StyledHeader } from "./Header.styled";
import { HeaderContainer } from "./Header.styled";
import { useEffect, useState } from "react";

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
