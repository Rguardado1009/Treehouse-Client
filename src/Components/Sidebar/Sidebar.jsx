import React, { useState } from "react";
import Login from "../Login/Login";
import { Link } from "react-router-dom";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarButton,
} from "../Sidebar/SidebarStyles";
import { useSelector } from "react-redux";
import { selectUserName } from "../../features/user/userSlice.js";
import { useLogout } from "../../hooks/useLogout.js";
const Sidebar = ({ isOpen, toggle, signIn }) => {
  const userName = useSelector(selectUserName);
  const { logout } = useLogout();
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="/Services" onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink to="/Contact" onClick={toggle}>
            Contact
          </SidebarLink>
          <SidebarLink to="/About" onClick={toggle}>
            About
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
      <SideBtnWrap>
        {userName ? (
          <SidebarLink to="/Login" onClick={toggle}>
            <SidebarButton onClick={logout}>Sign Out</SidebarButton>
          </SidebarLink>
        ) : (
          <SidebarLink to="/Login" onClick={toggle}>
            <SidebarButton>Login</SidebarButton>
          </SidebarLink>
        )}
      </SideBtnWrap>
    </SidebarContainer>
  );
};``

export default Sidebar;
