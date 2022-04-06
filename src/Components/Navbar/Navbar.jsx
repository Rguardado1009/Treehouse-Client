import React, { useState } from "react";

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
import { useSelector } from "react-redux";
import { selectUserName } from "../../features/user/userSlice.js";
import { useLogout } from "../../hooks/useLogout.js";
const Navbar = ({ toggle }) => {
  // const [hover, setHover] = useState(false);
  const userName = useSelector(selectUserName);
  const { logout } = useLogout();

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

        {userName ? (
          <Login>
            <Button onClick={logout}>Sign Out</Button>
          </Login>
        ) : (
          <NavLinks to="/Login">
            <Login>
              <Button>Login</Button>
            </Login>{" "}
          </NavLinks>
        )}
      </NavbarContainer>
      <p>{userName}</p>
    </MainContainer>
  );
};
export default Navbar;
