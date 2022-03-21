import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  MainContainer,
  NavbarContainer,
  Logo,
  MobileIcon,
  Menu,
  NavItem,
  NavLinks,
  Button,
  Login,
} from "../Navbar/NavbarStyles.jsx";
const Navbar = ({ toggle }) => {
  return (
    <MainContainer>
      <NavbarContainer>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "spaceEvenly",
            flexDirection: "column",
          }}
        >
          <Logo> treehouse </Logo>
          <Logo> studios </Logo>
        </Link>

        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>

        <Menu>
          <NavItem>
            <NavLinks to="/">
              <Button>Home</Button>
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/Services">
              <Button>Services</Button>
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/Contact">
              <Button>Contact</Button>
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/About">
              <Button>About</Button>
            </NavLinks>
          </NavItem>
        </Menu>
        <Login>
          <NavLinks to="/Login">
            <Button>Login</Button>
          </NavLinks>
        </Login>
      </NavbarContainer>
    </MainContainer>
  );
};
export default Navbar;
