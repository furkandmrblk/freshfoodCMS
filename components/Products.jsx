import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  ProductButton,
  ProductDescription,
  ProductDescriptionTitle,
  ProductDiv,
  ProductImage,
  ProductItemBottomDiv,
  ProductItemBottomLeftDiv,
  ProductItemBottomRightDiv,
  ProductItemDiv,
  ProductItemTopDiv,
  ProductPrice,
  ProductsTitle,
  ProductSubtitle,
  ProductTitle,
} from './ProductsStyled';
import imageUrlBuilder from '@sanity/image-url';

function Products({
  products,
  title,
  subtitle,
  descriptiontitle,
  description,
  price,
}) {
  const router = useRouter();
  const [mappedProducts, setMappedProducts] = useState([]);

  useEffect(() => {
    if (products.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: 'production',
      });

      setMappedProducts(
        products.map((p) => {
          return {
            ...p,
            image: imgBuilder.image(p.image),
          };
        })
      );
    } else {
      setMappedProducts([]);
    }
  }, [products]);

  return (
    <>
      <ProductsTitle id="products">Products</ProductsTitle>
      {mappedProducts.length ? (
        mappedProducts.map((p, index) => (
          <ProductDiv key={index}>
            <ProductImage
              src={p.image}
              onClick={() => router.push(`/${p.slug.current}`)}
            />
            <ProductItemDiv>
              <ProductItemTopDiv>
                <ProductTitle key={title}>{p.title}</ProductTitle>
                <ProductPrice key={price}>{p.price}</ProductPrice>
              </ProductItemTopDiv>
              <ProductItemBottomDiv>
                <ProductItemBottomLeftDiv>
                  <ProductSubtitle key={subtitle}>{p.subtitle}</ProductSubtitle>
                  <ProductDescriptionTitle key={descriptiontitle}>
                    {p.descriptiontitle}
                  </ProductDescriptionTitle>
                  <ProductDescription key={description}>
                    {p.description}
                  </ProductDescription>
                </ProductItemBottomLeftDiv>
                <ProductItemBottomRightDiv>
                  <ProductButton>Buy</ProductButton>
                </ProductItemBottomRightDiv>
              </ProductItemBottomDiv>
            </ProductItemDiv>
          </ProductDiv>
        ))
      ) : (
        <>No Posts Yet</>
      )}
    </>
  );
}

export default Products;
