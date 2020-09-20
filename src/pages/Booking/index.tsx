import React from 'react';
import { BookingContainer } from './style';
import { RouteComponentProps } from '@reach/router';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import Form from '../../components/Form';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import cafeVideo2 from '../../images/cafeVideo2.mp4';

const Booking: React.FC<RouteComponentProps> = () => {
  return (
    <BookingContainer>
      <Header>
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src={cafeVideo2} type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="container">
          <Logo />
          <h2>Reservations</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
            repellat praesentium optio incidunt sed molestiae dolore sint
            maiores
          </p>
          <Button>Go Back</Button>
        </div>
        <Form />
      </Header>
      <div className="clear-main"></div>
      <Footer />
    </BookingContainer>
  );
};

export default Booking;
