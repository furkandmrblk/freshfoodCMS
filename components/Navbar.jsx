import React, { useState } from 'react';
import {
  Hamburger,
  HamburgerDiv,
  Logo,
  Nav,
  NavItem,
  NavItemDiv,
} from './NavbarStyled';

function Navbar() {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open);

    if (open === true) {
      document.body.style.overflow = '';
    } else {
      document.body.style.overflow = '';
    }
  };

  return (
    <>
      <Nav>
        <Logo href="/">
          <span style={{ color: '#19740A' }}>fresh</span>
          <span style={{ color: '#74360A' }}>food</span>
        </Logo>
        <HamburgerDiv onClick={openMenu}>
          <Hamburger />
          <Hamburger />
          <Hamburger />
        </HamburgerDiv>
        <NavItemDiv open={open}>
          <NavItem href="/#aboutus">About Us</NavItem>
          <NavItem href="/#products">Products</NavItem>
          <NavItem href="/#contact">Contact</NavItem>
        </NavItemDiv>
      </Nav>
    </>
  );
}

export default Navbar;
