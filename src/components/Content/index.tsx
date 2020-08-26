import React from 'react';
import About from '../../components/About';
import Highlights from '../../components/Highlights';
import Reservation from '../../components/Reservation';
import styled from 'styled-components';

const ContentWrapper = styled.main`
  display: grid;
  grid-template-rows: 120vh 60vh 30vh;
`;

const Content = () => {
  return (
    <ContentWrapper>
      <About />
      <Highlights />
      <Reservation />
    </ContentWrapper>
  );
};

export default Content;
