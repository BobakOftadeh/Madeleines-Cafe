import React, { useState } from 'react';
import styled from 'styled-components';
import { Router, RouteComponentProps, Link } from '@reach/router';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import Form from '../../components/Form';
import Footer from '../../components/Footer';
import cafeVideo2 from '../../images/cafeVideo2.mp4';

const BookingContainer = styled.div`
  display: grid;
  grid-template-rows: 65vh 35vh 20vh;
  @media only screen and (max-width: 1300px) {
    grid-template-rows: 65vh 35vh 50vh;
  }

  @media only screen and (max-width: 420px) {
    grid-template-rows: 80vh 35vh 75vh;
  }

  margin: 0;
  position: relative;

  .clear-main {
    background-color: var(--color-primary-pale);
  }

  .div-booking {
    padding-bottom: 15.5rem;
  }
`;

const Booking: React.FC<RouteComponentProps> = () => {
  return (
    <BookingContainer>
      <Header type="1">
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src={cafeVideo2} type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="container div-booking">
          <Logo />
          <h2>Reservations</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
            repellat praesentium optio incidunt sed molestiae dolore sint
            maiores
          </p>
        </div>
        <Form />
      </Header>
      <div className="clear-main"></div>
      <Footer />
    </BookingContainer>
  );
};

export default Booking;
