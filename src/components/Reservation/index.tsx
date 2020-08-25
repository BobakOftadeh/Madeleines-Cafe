import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const ReservationsWrapper = styled.section`
  background-color: rgba(57, 62, 70, 0.5);
  background-image: url(../../images/cafe2.jpg);
`;

const Reservations: React.FC = () => {
  return (
    <ReservationsWrapper>
      <h3>Ready to make a Reservation?</h3>
      <Button />
    </ReservationsWrapper>
  );
};

export default Reservations;
