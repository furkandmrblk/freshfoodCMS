import React from 'react';
import styled from 'styled-components';
import { maxdevice } from '../theme/mediaQueries';

// Product Title

export const ProductsTitle = styled.h1`
  margin-top: 18.75rem;
  margin-bottom: 5.625rem;

  text-align: center;
  color: #74360a;

  font-size: 3.125rem;
  font-weight: 600;

  @media ${maxdevice.laptopL} {
    font-size: 3rem;
  }
  @media ${maxdevice.laptop} {
    font-size: 2rem;
  }
  @media ${maxdevice.mobileL} {
    font-size: 1.7rem;
  }
`;

// Product Containers

export const ProductDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 6.25rem;
  }
`;
export const ProductImage = styled.img`
  object-fit: contain;
  height: 20rem;
  width: 16rem;

  cursor: pointer;

  margin-right: 5rem;
`;
export const ProductItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ProductItemTopDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 30rem;
`;
export const ProductItemBottomDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  min-width: 30rem;
`;
export const ProductItemBottomLeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;
export const ProductItemBottomRightDiv = styled.div`
  display: flex;
  align-items: flex-end;
`;

// Product Items

export const ProductTitle = styled.h1`
  font-size: 1.875rem;
  font-weight: 600;
`;

export const ProductPrice = styled.h1`
  font-size: 1.125rem;
  font-weight: 600;
`;
export const ProductSubtitle = styled.h1`
  font-size: 1.375rem;
  color: #5f4141;
`;

export const ProductDescriptionTitle = styled.h1`
  font-size: 1rem;
  color: #5f4141;
`;

export const ProductDescription = styled.h1`
  font-size: 1rem;
  color: #5f4141;
`;

// Product CTA

export const ProductButton = styled.a`
  padding: 0.3rem 2.5rem;
  background-color: #19740a;

  color: #fff;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 50px;

  cursor: pointer;

  transition: all 250ms ease-in-out;

  &:hover {
    background-color: #145809;
  }

  margin-top: 3rem;
`;
