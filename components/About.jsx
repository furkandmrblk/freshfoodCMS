import React from 'react';
import { AboutDiv, AboutTitle, AboutText } from './AboutStyled';

function About({ text, text2 }) {
  return (
    <AboutDiv id="aboutus">
      <AboutTitle>
        <span style={{ color: '#19740A' }}>fresh</span>
        <span style={{ color: '#74360A' }}>food</span>
      </AboutTitle>
      <AboutText>{text}</AboutText>
      <AboutText>{text2}</AboutText>
    </AboutDiv>
  );
}

export default About;
