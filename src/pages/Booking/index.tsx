import React, { useState } from 'react';
import styled from 'styled-components';
import { Router, RouteComponentProps, Link } from '@reach/router';
import Header from '../../components/Header';
import Form from '../../components/Form';
import Footer from '../../components/Footer';
import cafeVideo2 from '../../images/cafeVideo2.mp4';

const BookingContainer = styled.div`
  display: grid;
  grid-template-rows: 65vh 35vh 20vh;
  margin: 0;
  position: relative;

  .bg-video {
    top: -30rem;
  }

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
        <video className="bg-video" autoPlay muted loop>
          <source src={cafeVideo2} type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
        <div className="container div-booking">
          <h1 className="title">Madeleine's</h1>
          <h1>Reservations</h1>
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
