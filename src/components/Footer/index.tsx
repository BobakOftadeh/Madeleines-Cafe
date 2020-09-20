import React from 'react';
import Logo from '../../components/Logo';
import { FooterWrapper } from './style';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Logo />
      <div>
        <h3>MARTHWAITE, SEDBERGH</h3>
        <h3>CUMBRIA</h3>
        <h3>+00 44 416 7878</h3>
      </div>
      <div>
        <h3>OPEN TIMES</h3>
        <h3>MON - FRI: 09:00 AM - 10:00 PM</h3>
        <h3>SAT - SUN: 09:00 AM - 11:30 PM</h3>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
