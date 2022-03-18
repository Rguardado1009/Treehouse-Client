import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.nav`
  background: #2b2b2b;
  height: 10vh;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  width: 100vw;
  max-width: 1100px;
`;
export const Logo = styled.h1`
  font-family: "Roboto";
  font-size: 1rem;
  line-height: 2px;
  text-transform: uppercase;
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  background: #2b2b2b;
`;
export const Button = styled.button`
  border: none;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  /* border-bottom: 1px solid red; */
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2b2b2b;
  color: #ffffff;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Login = styled.button`
  border: 1px solid #00e7af;
  box-sizing: border-box;
  border-radius: 24px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  height: 35px;
  width: 136px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-self: flex-end;
  justify-content: center;
  /* identical to box height */
  background: #2b2b2b;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  } ;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 2rem;
  list-style: none;
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  width: 100%;
  &.active {
    border-bottom: 1px solid #00e7af;
  }
`;
