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
      <Header type="1">
        <h1 className="title">dine</h1>
        <div className="container">
          <h1>Exquisite dinning since 1994</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
            repellat praesentium optio incidunt sed molestiae dolore sint
            maiores
          </p>
          <Link to="booking">Book A Table</Link>
        </div>
      </Header>
      <Content />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
