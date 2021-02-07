import React from 'react';
import styled from 'styled-components';
import { maxdevice } from '../theme/mediaQueries';

export const AboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 57.475rem;
  width: 100vw;

  background-color: #e3d9c7;
`;

export const AboutTitle = styled.h1`
  margin-top: 18.75rem;
  margin-bottom: 5.625rem;

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

export const AboutText = styled.h1`
  font-size: 1.7rem;
  font-weight: 500;
  text-align: center;

  max-width: 60rem;

  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }

  @media ${maxdevice.laptopL} {
    font-size: 1.5rem;
    max-width: 50rem;
  }
  @media ${maxdevice.laptop} {
    font-size: 1.2rem;
    max-width: 40rem;
  }
  @media ${maxdevice.tablet} {
    font-size: 1rem;
    max-width: 17rem;
  }
`;
