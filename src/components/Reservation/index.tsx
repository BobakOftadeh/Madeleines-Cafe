import React from 'react';
import { ReservationsWrapper } from './style';
import Button from '../Button';

const Reservations: React.FC = () => {
  return (
    <ReservationsWrapper>
      <h3>Ready to make a Reservation?</h3>
      <Button>Book A Table</Button>
    </ReservationsWrapper>
  );
};

export default Reservations;
