import styled from 'styled-components';

export const BookingContainer = styled.div`
  display: grid;
  grid-template-rows: 75vh 35vh min-content;
  @media only screen and (max-width: 1300px) {
    grid-template-rows: 65vh 35vh min-content;
  }

  @media only screen and (max-width: 420px) {
    grid-template-rows: 70vh 35vh min-content;
  }

  margin: 0;
  position: relative;

  .clear-main {
    background-color: var(--color-primary-pale);
  }
`;
