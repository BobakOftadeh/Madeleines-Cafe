import styled from 'styled-components';

export const FooterWrapper = styled.footer`
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
