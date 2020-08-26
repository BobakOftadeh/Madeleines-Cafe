import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import ReservationBg from '../../images/cafe2.jpg';

const ReservationsWrapper = styled.section`
  background-image: linear-gradient(
      rgba(57, 62, 70, 0.7),
      rgba(57, 62, 70, 0.7)
    ),
    url(${ReservationBg});
  background-position: center;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    color: white;
    font-size: 4rem;
    margin-left: -8%;
    margin-right: 21%;
  }
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
