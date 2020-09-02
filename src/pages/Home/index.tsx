import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps, Link } from '@reach/router';
import Header from '../../components/Header';
import Content from '../../components/Content';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';
import cafeVideo from '../../images/cafeVideo1.mp4';

const HomeContainer = styled.div`
  display: grid;
  grid-template-rows: 75vh 280vh 20vh;

  @media only screen and (max-width: 1300px) {
    grid-template-rows: 60vh 250vh 50vh;
  }
`;

const Home: React.FC<RouteComponentProps> = (props) => {
  return (
    <HomeContainer>
      <Header type="1">
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
          <Link to="booking">Book A Table</Link>
        </div>
      </Header>
      <Content />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
