import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: var(--color-primary-dark);
  color: white;

  h1 {
    font-size: 4rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  & > h1,
  & > div {
    flex: 0 0 30%;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <h1>dine</h1>
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
