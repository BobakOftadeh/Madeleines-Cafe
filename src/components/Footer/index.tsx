import React from 'react';
import styled from 'styled-components';
import Logo from '../../components/Logo';

const FooterWrapper = styled.footer`
  background-color: var(--color-primary-dark);
  color: white;
  display: grid;
  place-content: center;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(43rem, max-content));
  grid-gap: 11rem;
  padding: 4rem;

  @media only screen and (max-width: 1400px) {
    grid-gap: 0;
  }

  @media only screen and (max-width: 1000px) {
    grid-template-columns: auto;
    grid-gap: 6rem;

    & > div {
      text-align: center;
    }
  }

  h3 {
    font-size: 2rem;
    font-weight: 400;
  }

  .logo-wrapper {
    display: contents;
    margin-bottom: 0 !important;
  }

  .logo-container {
    margin-bottom: 0 !important;
  }
`;

const Footer = () => {
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
