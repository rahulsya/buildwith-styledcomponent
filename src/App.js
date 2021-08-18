import React from "react";
import { Hero } from "./Components/Hero";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
    </Router>
  );
}
