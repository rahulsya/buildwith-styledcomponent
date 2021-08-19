import React from "react";
import { Nav, NavLink, NavIcon, Bars } from "./NavBarElements";

export const NavBar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">Pizza</NavLink>
        <NavIcon onClick={toggle}>
          <p>menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};
