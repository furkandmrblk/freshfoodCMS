import React from 'react';
import styled from 'styled-components';
import { maxdevice } from '../theme/mediaQueries';

// Contact Title

export const ContactTitle = styled.h1`
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

// ContactDiv

export const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// ContactItem

export const ContactItem = styled.h1`
  font-size: 1.7rem;
  text-align: center;
  font-weight: 500;

  max-width: 60rem;

  &:not(:last-child) {
    margin-bottom: 1rem;
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

// Contact CTA

export const ContactButton = styled.a`
  padding: 0.8rem 2rem;

  background-color: #5f4141;
  border-radius: 50px;

  color: #fff;
  font-size: 1.375rem;
  font-weight: 500;
  cursor: pointer;

  margin-top: 5rem;

  transition: all 250ms ease-in-out;

  &:hover {
    background-color: #462f2f;
  }

  @media ${maxdevice.laptopL} {
    font-size: 1.2rem;
  }
  @media ${maxdevice.laptop} {
    padding: 0.8rem 1.3rem;
    font-size: 1rem;
  }
  @media ${maxdevice.mobileL} {
    font-size: 0.85rem;
  }
`;
