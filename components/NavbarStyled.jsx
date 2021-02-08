import React from 'react';
import styled from 'styled-components';
import { maxdevice } from '../theme/mediaQueries';

// Nav & Menu Containers

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const NavItemDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  margin: 2.8125rem 10.6875rem 0 0;

  @media ${maxdevice.navmenu} {
    overflow: hidden;
    flex-direction: column;
    justify-content: center;

    background-color: #eae4d9;

    width: 100%;

    transition: max-height 450ms ease-in-out;

    max-height: ${({ open }) => (open ? '300px' : '0')};

    margin: 2rem 0 0 0;
  }
`;

// Navbar & Menu Items

export const Logo = styled.a`
  font-size: 1.75rem;
  font-weight: 600;
  cursor: pointer;

  margin: 2.8125rem 0 0 10.6875rem;

  @media ${maxdevice.tablet} {
    margin: 2.8125rem 0 0 5.6875rem;

    font-size: 1.3rem;
  }

  @media ${maxdevice.mobileL} {
    margin: 2.8125rem 0 0 2.6875rem;
  }
`;

export const NavItem = styled.a`
  font-size: 1.25rem;
  font-weight: 600;
  cursor: pointer;

  color: #000;

  transition: all 200ms ease-in-out;

  &:hover {
    color: #807b7b;
  }

  &:not(:first-child) {
    margin-left: 6.25rem;
  }

  @media ${maxdevice.laptop} {
    &:not(:first-child) {
      margin-left: 3.25rem;
    }
  }

  @media ${maxdevice.navmenu} {
    text-align: center;
    &:not(:first-child) {
      margin-left: 0rem;
    }
    margin-bottom: 1rem;
    width: 100%;
  }
`;

// Menu Containers

export const HamburgerDiv = styled.div`
  @media ${maxdevice.navmenu} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    margin: 2.8125rem 10.6875rem 0 0;

    @media ${maxdevice.tablet} {
      margin: 2.8125rem 5.6875rem 0 0;
    }

    @media ${maxdevice.mobileL} {
      margin: 2.8125rem 2.6875rem 0 0;
    }
  }
`;

// Menu

export const Hamburger = styled.span`
  @media ${maxdevice.navmenu} {
    height: 0;
    width: 1.75rem;

    border: 1px solid #000;
    border-radius: 2px;

    &:not(:last-child) {
      margin-bottom: 0.4rem;
    }
  }

  @media ${maxdevice.tablet} {
    width: 1.3rem;
    &:not(:last-child) {
      margin-bottom: 0.2rem;
    }
  }
`;
