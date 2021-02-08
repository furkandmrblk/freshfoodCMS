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

  @media ${maxdevice.tablet} {
    flex-direction: column;
  }
`;
export const ProductImage = styled.img`
  object-fit: contain;
  height: 20rem;
  width: 16rem;

  filter: drop-shadow(5px 5px 7px rgba(0, 0, 0, 0.7));

  cursor: pointer;

  margin-right: 5rem;

  @media ${maxdevice.laptopL} {
    height: 17rem;
    width: 13rem;
  }
  @media ${maxdevice.laptop} {
    height: 15rem;
    width: 11rem;
  }
  @media ${maxdevice.tablet} {
    margin-right: 0;
    margin-bottom: 1.5rem;
  }
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

  @media ${maxdevice.laptopL} {
    min-width: 25rem;
  }
  @media ${maxdevice.laptop} {
    min-width: 22rem;
  }
  @media ${maxdevice.mobileL} {
    min-width: 13rem;
    flex-direction: column;
  }
`;
export const ProductItemBottomDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  min-width: 30rem;

  @media ${maxdevice.laptopL} {
    min-width: 25rem;
  }
  @media ${maxdevice.laptop} {
    min-width: 22rem;
  }
  @media ${maxdevice.mobileL} {
    min-width: 13rem;
    flex-direction: column;
  }
`;
export const ProductItemBottomLeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  @media ${maxdevice.mobileL} {
    align-items: center;
  }
`;
export const ProductItemBottomRightDiv = styled.div`
  display: flex;
  align-items: flex-end;
`;

// Product Items

export const ProductTitle = styled.h1`
  font-size: 1.875rem;
  font-weight: 600;

  @media ${maxdevice.laptopL} {
    font-size: 1.775rem;
  }
  @media ${maxdevice.laptop} {
    font-size: 1.675rem;
  }
  @media ${maxdevice.mobileL} {
    font-size: 1.475rem;
  }
`;

export const ProductPrice = styled.h1`
  font-size: 1.125rem;
  font-weight: 600;
`;
export const ProductSubtitle = styled.h1`
  font-size: 1.375rem;
  color: #5f4141;

  @media ${maxdevice.laptopL} {
    font-size: 1.2375rem;
  }
  @media ${maxdevice.laptop} {
    font-size: 1.1375rem;
  }
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
