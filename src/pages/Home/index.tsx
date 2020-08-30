import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps, Link } from '@reach/router';
import Header from '../../components/Header';
import Content from '../../components/Content';
import Footer from '../../components/Footer';
import cafeVideo from '../../images/cafeVideo1.mp4';

const HomeContainer = styled.div`
  display: grid;
  grid-template-rows: 75vh 210vh 20vh;
`;

const Home: React.FC<RouteComponentProps> = (props) => {
  return (
    <HomeContainer>
      <Header type="1">
        <video className="bg-video" autoPlay muted loop>
          <source src={cafeVideo} type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
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
