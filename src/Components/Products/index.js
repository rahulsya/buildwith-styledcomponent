import React from "react";
import {
  ProductContainer,
  ProductHeading,
  ProductWrapper,
  ProductButton,
  ProductCard,
  ProductDesc,
  ProductTitle,
  ProductImg,
  ProductInfo,
  ProductPrice,
} from "./productElements";

function Products({ heading, data }) {
  return (
    <ProductContainer>
      <ProductHeading>{heading}</ProductHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton>{product.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductContainer>
  );
}

export default Products;
