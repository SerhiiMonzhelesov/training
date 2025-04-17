import Header from "../components/Header/Header";
import Container from "../shared/Container/Container";
import styled, { keyframes } from "styled-components";
import foto from "../assets/foto/serhii.jpg";

function Homepage() {
  return (
    <>
      <Header />
      <main>
        <MainContainer>
          <div className="img-thumbs">
            <img src={foto} alt="i am" className="img" />
          </div>
          <div className="test">this is the beginning</div>
        </MainContainer>
      </main>
    </>
  );
}

export default Homepage;

const move = keyframes`
  0% {
    transform: scale(1);
    top: 200px;
    left: 300px;
    opacity: 0.2;
    filter:blur(5px)
  }

  100% {
    transform: scale(2); /* 200px * 2 = 400px */
    top: 0;
    left: 100px;
    opacity: 1;
    filter: blur(0px)
  }
`;

const MainContainer = styled(Container)`
  color: #402c2c;
  position: relative;

  .img-thumbs {
    position: absolute;
    top: 0;
    left: 200;
    width: 200px;
    aspect-ratio: 1 / 1;
    opacity: 0.2;
    animation: ${move} 1.5s ease-in-out forwards;
    transform-origin: top left;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      //filter: blur(1px);
    }
  }
`;
