import React from 'react';

import HeroSection from '../HeroSection';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <>
      <HeroSection
        src="./images/Contact.jpg"
        hideButton={false}
      />
      <ContactForm />
    </>
  );
}

export default Contact;