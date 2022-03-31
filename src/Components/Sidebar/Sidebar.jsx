import React from "react";
import Login from "../Login/Login";
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
const Sidebar = ({ isOpen, toggle, signIn }) => {
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
        <SidebarLink to="/Login" onClick={toggle}>
          <SidebarButton onClick={signIn}>Login</SidebarButton>
        </SidebarLink>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
