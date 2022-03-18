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
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo> treehouse </Logo>
          <Logo> studios </Logo>
        </Link>

        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>

        <Menu>
          <NavItem>
            <NavLinks to="/">
              <Button onClick={toggle}>Home</Button>
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/Services">
              <Button onClick={toggle}>Services</Button>
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/Contact">
              <Button onClick={toggle}>Contact</Button>
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/About">
              <Button onClick={toggle}>About</Button>
            </NavLinks>
          </NavItem>
        </Menu>
        <Login>
          <NavLinks to="/Login">
            <Button onClick={toggle}>Login</Button>
          </NavLinks>
        </Login>
      </NavbarContainer>
    </MainContainer>
  );
};
export default Navbar;
