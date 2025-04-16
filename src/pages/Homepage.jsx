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
    width: 200px;
    height: 200px;
    top: 200px;
    left: 200px;
    opacity: 0.2;
  }

  50% {
    width: 300px;
    height: 300px;
    top: 100px;
    left: 100px;
    opacity: 0.5;
  }

  100% {
    width: 400px;
    height: 400px;
    top: 0;
    left: 0;
    opacity: 1;
  }
`;

const MainContainer = styled(Container)`
  color: #402c2c;
  position: relative;

  .img-thumbs {
    position: absolute;
    top: 200px;
    left: 200px;
    width: 200px;
    opacity: 0.2;
    animation: ${move} 1.5s linear forwards;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      //filter: blur(1px);
    }
  }
`;
