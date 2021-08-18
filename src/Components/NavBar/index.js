import React from "react";
import { Nav, NavLink, NavIcon, Bars } from "./NavBarElements";

export const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">Pizza</NavLink>
        <NavIcon>
          <p>menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};
