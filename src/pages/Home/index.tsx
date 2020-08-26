import React from 'react';
import styled from 'styled-components';
import { Router, RouteComponentProps, Link } from '@reach/router';
import Header from '../../components/Header';
import Content from '../../components/Content';
import Footer from '../../components/Footer';

const HomeContainer = styled.div`
  display: grid;
  grid-template-rows: 75vh 210vh 20vh;
`;

const Home: React.FC<RouteComponentProps> = (props) => {
  return (
    <HomeContainer>
      <Header />
      <Content />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
