import React from 'react';
import styled from 'styled-components';
import { maxdevice } from '../theme/mediaQueries';

// Product Containers

export const ProductDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 10rem;
`;
export const ProductItemDiv = styled.div`
  display: flex;
  flex-direction: column;

  height: 20rem;

  margin-left: 2rem;
`;

// Product Items

export const ProductImage = styled.img`
  height: 40rem;
  width: 30rem;
  object-fit: contain;
`;

export const ProductTitle = styled.h1`
  font-size: 4rem;

  margin-bottom: 5rem;
`;
export const ProductSubtitle = styled.h1`
  font-size: 2rem;
  color: #5f4141;

  margin-bottom: 3rem;
`;
export const ProductDescriptionTitle = styled.h1`
  font-size: 1.5rem;
  color: #5f4141;
`;
export const ProductDescription = styled.h1`
  font-size: 1.5rem;
  color: #5f4141;
`;
