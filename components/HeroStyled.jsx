import React from 'react';
import styled from 'styled-components';
import { maxdevice } from '../theme/mediaQueries';

// HeroImage

export const HeroImage = styled.div`
  z-index: -1;
  background-image: url('freshfoodhero.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  min-height: 100vh;
  width: 100%;

  margin-top: -5.5rem;

  @media ${maxdevice.navmenu} {
    margin-top: -7.5rem;
  }
`;

// HeroTextDiv

export const HeroTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-left: 10.6875rem;
  padding-top: 15rem;

  @media ${maxdevice.laptopL} {
    max-width: 32rem;
  }
  @media ${maxdevice.tablet} {
    margin-left: 5.6875rem;

    max-width: 25rem;
    font-size: 1.3rem;
  }
  @media ${maxdevice.mobileL} {
    margin-left: 0;
    max-width: auto;
    text-align: center;
    align-items: center;
  }
`;

// Slogan

export const HeroSlogan = styled.h1`
  font-size: 3.125rem;
  font-weight: 600;

  @media ${maxdevice.desktop} {
    font-size: 2.65rem;
  }
  @media ${maxdevice.laptopL} {
    font-size: 2.5rem;
  }
  @media ${maxdevice.tablet} {
    font-size: 2rem;
  }
  @media ${maxdevice.mobileM} {
    font-size: 1.8rem;
  }
  @media ${maxdevice.mobileM} {
    font-size: 1.7rem;
  }
`;

// Title & Subtitle

export const HeroTitle = styled.h1`
  font-size: 3.125rem;
  font-weight: 600;

  margin-bottom: 0.8rem;

  @media ${maxdevice.desktop} {
    font-size: 2.65rem;
  }
  @media ${maxdevice.laptopL} {
    font-size: 2.5rem;
  }
  @media ${maxdevice.tablet} {
    font-size: 2rem;
  }
  @media ${maxdevice.mobileM} {
    font-size: 1.8rem;
  }
  @media ${maxdevice.mobileM} {
    font-size: 1.7rem;
  }
`;

export const HeroSubtitle = styled.h1`
  font-size: 1.5rem;

  @media ${maxdevice.desktop} {
    font-size: 1.1rem;
  }
  @media ${maxdevice.laptopL} {
    font-size: 0.99rem;
  }
  @media ${maxdevice.tablet} {
    font-size: 0.8rem;
  }
  @media ${maxdevice.mobileM} {
    font-size: 0.7rem;
  }
  @media ${maxdevice.mobileS} {
    font-size: 0.6rem;
  }
`;

// CTA

export const HeroButton = styled.a`
  padding: 0.65rem 4rem;

  background-color: #19740a;
  border-radius: 50px;

  color: #fff;
  font-size: 1.375rem;
  font-weight: 500;
  cursor: pointer;

  margin-top: 5rem;

  transition: all 250ms ease-in-out;

  &:hover {
    background-color: #145809;
  }

  @media ${maxdevice.desktop} {
    padding: 0.65rem 4rem;
    font-size: 1.1rem;
  }
  @media ${maxdevice.laptopL} {
    font-size: 1.05rem;
  }
  @media ${maxdevice.tablet} {
    padding: 0.65rem 3rem;
    font-size: 0.85rem;
  }
  @media ${maxdevice.mobileM} {
    font-size: 0.8rem;
  }
`;
