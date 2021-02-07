import React from 'react';
import {
  HeroTitle,
  HeroSubtitle,
  HeroImage,
  HeroTextDiv,
  HeroSlogan,
  HeroButton,
} from './HeroStyled';

function Hero({ title, subtitle }) {
  return (
    <HeroImage>
      <HeroTextDiv>
        <HeroSlogan>
          <span style={{ color: '#19740A' }}>Fresh. </span>
          <span style={{ color: '#74360A' }}>Healthy.</span>
        </HeroSlogan>
        <HeroTitle>{title}</HeroTitle>
        <HeroSubtitle>{subtitle}</HeroSubtitle>
        <HeroButton href="#products">Order Now</HeroButton>
      </HeroTextDiv>
    </HeroImage>
  );
}

export default Hero;
