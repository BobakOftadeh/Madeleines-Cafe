import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps, Link } from '@reach/router';
import Header from '../../components/Header';
import About from '../../components/About';
import Highlights from '../../components/Highlights';
import Button from '../../components/Button';
import Reservation from '../../components/Reservation';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';
import cafeVideo from '../../images/cafeVideo1.mp4';

const HomeContainer = styled.div`
  display: grid;
  grid-template-rows: 75vh repeat(4, min-content);

  @media only screen and (max-width: 1100px) {
    grid-template-rows: 60vh repeat(4, min-content);
  }
`;

const Home: React.FC<RouteComponentProps> = (props) => {
  return (
    <HomeContainer>
      <Header>
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src={cafeVideo} type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="container">
          <Logo />
          <h2>Exquisite dining since 1994</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
            repellat praesentium optio incidunt sed molestiae dolore sint
            maiores
          </p>
          <Button>Book A Table</Button>
        </div>
      </Header>
      <About />
      <Highlights />
      <Reservation />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
