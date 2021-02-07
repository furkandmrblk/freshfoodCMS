import React from 'react';
import {
  ContactButton,
  ContactDiv,
  ContactItem,
  ContactTitle,
} from './ContactStyled';

function Contact({ ceo, adress, number }) {
  return (
    <>
      <ContactTitle id="contact">Contact</ContactTitle>
      <ContactDiv>
        <ContactItem>{ceo}</ContactItem>
        <ContactItem>{adress}</ContactItem>
        <ContactItem>{number}</ContactItem>
        <ContactButton>Contact Us</ContactButton>
      </ContactDiv>
    </>
  );
}

export default Contact;
