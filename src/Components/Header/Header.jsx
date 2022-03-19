import React, { useState } from "react";
import {
  HeaderContainer,
  HeaderContent,
  HeaderH1,
  HeaderP,
  HeaderBtnWrapper,
  ArrowForward,
  ArrowRight,
  Button,
} from "./HeaderStyles";

export default function Header() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeaderContainer id="home">
      <HeaderContent>
        <HeaderH1>TREEHOUSE</HeaderH1>
        <HeaderH1>STUDIOS</HeaderH1>
        <HeaderP>For Artist By Artist</HeaderP>
        <HeaderBtnWrapper>
          <Button
            to="signup"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            primary="true"
            dark="true"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Book Now {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeaderBtnWrapper>
      </HeaderContent>
    </HeaderContainer>
  );
}

// const Container = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
//   flex-direction: column;
//   height: 90vh;
//   background: #2b2b2b;
//   box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.3);

//   margin-top: 0;
// `;

// const MainContent = styled.h1`
//   display: flex;
//   font-family: "Roboto";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 9rem;
//   line-height: 7rem;
//   text-align: center;
//   color: #00e7af;
//   opacity: 0.2;
// `;
// const Logo = styled.img`
//   display: flex;
//   flex-wrap: wrap;
//   position: absolute;
//   top: 25.5vh;
//   width: 30vw;
// `;

// const Slogan = styled.h1`
//   display: flex;
//   flex-wrap: wrap;
//   font-family: "Roboto";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 3rem;
//   /* line-height: 169px; */
//   text-align: center;
//   color: #fff;
// `;

// const Booknow = styled.button`
//   box-sizing: border-box;
//   border-radius: 24px;
//   font-family: "Roboto";
//   font-style: normal;
//   font-weight: 700;
//   font-size: 1rem;
//   line-height: 21px;
//   width: 180px;
//   height: 45px;
//   text-align: center;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   /* identical to box height */
//   background-color: #00e7af;
//   color: #000;
// `;
