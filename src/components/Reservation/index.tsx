import React from 'react';
import { ReservationsWrapper } from './style';
import { Link } from '@reach/router';

const Reservations: React.FC = () => {
  return (
    <ReservationsWrapper>
      <h3>Ready to make a Reservation?</h3>
      <div>
        <Link to="booking">Book A Table</Link>
      </div>
    </ReservationsWrapper>
  );
};

export default Reservations;
