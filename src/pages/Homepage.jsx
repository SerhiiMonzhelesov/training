import Header from "../components/Header/Header";
import Container from "../shared/Container/Container";
import styled, { keyframes } from "styled-components";
import foto1 from "../assets/foto/1.jpg";
import foto2 from "../assets/foto/2.jpg";
import foto3 from "../assets/foto/3.jpg";

function Homepage() {
  return (
    <>
      <Header />
      <main>
        <MainContainer>
          <div className="img-thumbs foto1">
            <img src={foto1} alt="i am" className="img" />
          </div>
          <div className="img-thumbs foto2">
            <img src={foto2} alt="i am2" className="img" />
          </div>
          <div className="img-thumbs foto3">
            <img src={foto3} alt="i am3" className="img" />
          </div>
          <div className="test"></div>
        </MainContainer>
      </main>
    </>
  );
}

export default Homepage;

const move1 = keyframes`
  0% {
    transform: scale(1);
    top: 150px;
    left: 250px;
    opacity: 0.5;
    filter:blur(3px) grayscale(1)
  }

  100% {
    transform: scale(2); /* 200px * 2 = 400px */
    top: -25px;
    left: 150px;
    opacity: 1;
    filter: blur(0px) grayscale(0)
  }
`;
const move2 = keyframes`
  0% {
    transform: scale(1);
    top: 150px;
    left: 250px;
    opacity: 0.2;
    filter:blur(5px)
  }

  100% {
    transform: scale(2); /* 200px * 2 = 400px */
    top: 310;
    left: 15px;
    opacity: 1;
    filter: blur(0px)
  }
`;
const move3 = keyframes`
  0% {
    transform: scale(1);
    top: 150px;
    left: 250px;
    opacity: 0.2;
    filter:blur(5px)
  }

  100% {
    transform: scale(2); /* 200px * 2 = 400px */
    top: 330;
    left: 265px;
    opacity: 1;
    filter: blur(0px)
  }
`;

const MainContainer = styled(Container)`
  color: #402c2c;
  position: relative;
  z-index: 1;

  .img-thumbs {
    position: absolute;
    //width: 200px;
    aspect-ratio: 1 / 1;
    opacity: 0.2;
    //animation: ${move1} 2s ease-in-out forwards;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      //filter: grayscale(0);
    }
  }

  .img-thumbs.foto1 {
    width: 150px;
    top: -25px;
    left: 150px;
    animation: ${move1} 2s ease-in-out forwards;
    transform-origin: top left;
    z-index: 1;
  }
  .img-thumbs.foto2 {
    width: 100px;
    top: 310px;
    left: 15px;
    animation: ${move2} 2s ease-in-out forwards;
    transform-origin: top left;
  }
  .img-thumbs.foto3 {
    width: 100px;
    top: 330px;
    left: 265px;
    animation: ${move3} 2s ease-in-out forwards;
    transform-origin: top left;
  }
`;
