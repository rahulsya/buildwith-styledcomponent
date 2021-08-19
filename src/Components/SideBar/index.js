import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarMenu,
  SideBarLink,
  SideBtnWrap,
  SidebarRouter,
} from "./sideBarElements";

function SideBar({ isOpen, toggle }) {
  return (
    <SideBarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarMenu>
        <SideBarLink to="/">Pizzas</SideBarLink>
        <SideBarLink to="/">Desert</SideBarLink>
        <SideBarLink to="/">Full Menu</SideBarLink>
      </SideBarMenu>
      <SideBtnWrap>
        <SidebarRouter to="/">Order Now</SidebarRouter>
      </SideBtnWrap>
    </SideBarContainer>
  );
}

export default SideBar;
