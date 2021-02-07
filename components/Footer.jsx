import React from 'react';
import {
  FooterDiv,
  FooterImage,
  FooterItem,
  FooterLinkDiv,
  FooterLogo,
} from './FooterStyled';

function Footer() {
  return (
    <FooterImage>
      <FooterDiv>
        <FooterLogo href="/">
          <span style={{ color: '#19740A' }}>fresh</span>
          <span style={{ color: '#74360A' }}>food</span>
        </FooterLogo>
        <FooterLinkDiv>
          <FooterItem href="/#products">Products</FooterItem>
          <FooterItem href="/#aboutus">About</FooterItem>
          <FooterItem href="/#contact">Contact</FooterItem>
        </FooterLinkDiv>
      </FooterDiv>
    </FooterImage>
  );
}

export default Footer;
