import React from 'react';
import styled from 'styled-components';
import { maxdevice } from '../theme/mediaQueries';

// Footer Design

export const FooterImage = styled.div`
  z-index: -1;
  background-image: url('FooterDesign.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  height: 20rem;
  width: 100vw;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  margin-top: 18.75rem;
`;

// FooterDiv

export const FooterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 7.8125rem;
  width: 48.125rem;

  @media ${maxdevice.tablet} {
    flex-direction: column;
  }
  @media ${maxdevice.mobileS} {
    margin-bottom: 3rem;
  }
`;
export const FooterLinkDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media ${maxdevice.tablet} {
    margin-bottom: 1rem;
  }
  @media ${maxdevice.mobileS} {
    flex-direction: column;
  }
`;

// Footer Items

export const FooterLogo = styled.a`
  font-size: 1.75rem;
  font-weight: 600;
  cursor: pointer;

  @media ${maxdevice.tablet} {
    margin-top: 2rem;
    text-align: center;
    font-size: 1.3rem;
  }
  @media ${maxdevice.mobileS} {
    margin-bottom: 0.5rem;
  }
`;

export const FooterItem = styled.a`
  font-size: 1.375rem;
  font-weight: 500;

  color: #000;

  cursor: pointer;

  transition: all 200ms ease-in-out;

  &:not(:first-child) {
    margin-left: 5rem;
  }

  &:hover {
    color: #807b7b;
  }

  @media ${maxdevice.tablet} {
    font-size: 1rem;
  }
  @media ${maxdevice.mobileL} {
    &:not(:first-child) {
      margin-left: 3rem;
    }
  }
  @media ${maxdevice.mobileM} {
    &:not(:first-child) {
      margin-left: 2.5rem;
    }
  }
  @media ${maxdevice.mobileS} {
    &:not(:first-child) {
      margin-left: 0rem;
    }

    margin-bottom: 0.5rem;
  }
`;
