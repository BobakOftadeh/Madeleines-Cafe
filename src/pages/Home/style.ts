import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: grid;
  grid-template-rows: 75vh repeat(4, min-content);

  @media only screen and (max-width: 1100px) {
    grid-template-rows: 60vh repeat(4, min-content);
  }
`;
