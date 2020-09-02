import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: var(--color-primary-dark);
  color: white;
  display: grid;
  place-content: center;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(43rem, max-content));
  grid-gap: 11rem;

  @media only screen and (max-width: 1000px) {
    grid-template-columns: auto;
    grid-gap: 5rem;

    & > div {
      text-align: center;
    }
  }

  h1 {
    font-size: 6.4rem;
    font-weight: 400;
  }

  h3 {
    font-size: 2rem;
    font-weight: 400;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <h1>Madeleine's Cafe</h1>
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
