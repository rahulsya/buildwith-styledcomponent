import React from "react";
import { Hero } from "./Components/Hero";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Products from "./Components/Products";
import { productData } from "./Components/Products/data";

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favorite" data={productData} />
    </Router>
  );
}
