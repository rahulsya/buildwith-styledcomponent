import React from "react";
import { NavBar } from "../NavBar";
import {
  HeroContainer,
  HeroBtn,
  HeroContent,
  HeroH1,
  HeroItems,
  HeroP,
} from "./heroElements";
export const Hero = () => {
  return (
    <HeroContainer>
      <NavBar />
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
