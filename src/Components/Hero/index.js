import React from "react";
import { NavBar } from "../NavBar";
import SideBar from "../SideBar";
import {
  HeroContainer,
  HeroBtn,
  HeroContent,
  HeroH1,
  HeroItems,
  HeroP,
} from "./heroElements";
export const Hero = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <HeroContainer>
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Greates Pizza Ever</HeroH1>
          <HeroP>Ready in 60 seconds</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};
