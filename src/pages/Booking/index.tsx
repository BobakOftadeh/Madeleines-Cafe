import React from 'react';
import styled from 'styled-components';
import { Router, RouteComponentProps, Link } from '@reach/router';
import Footer from '../../components/Footer';

const BookingContainer = styled.div`
  display: grid;
  grid-template-rows: 75vh 100vh 20vh;
`;

const Booking: React.FC<RouteComponentProps> = () => {
  return (
    <div>
      <Footer />
    </div>
  );
};

export default Booking;
