import styled from 'styled-components';
import ReservationBg from '../../images/cafe2.jpg';

export const ReservationsWrapper = styled.section`
  background-image: linear-gradient(
      rgba(57, 62, 70, 0.7),
      rgba(57, 62, 70, 0.7)
    ),
    url(${ReservationBg});
  background-position: center;
  background-attachment: fixed;
  display: grid;
  padding: 10rem;
  grid-template-columns: repeat(auto-fit, minmax(53rem, max-content));
  grid-gap: 10rem;
  place-content: center;
  place-items: center;

  a {
    margin-bottom: 0;
  }

  h3 {
    color: white;
    text-align: center;
    font-size: 4rem;
  }

  @media only screen and (max-width: 1000px) {
    grid-gap: 4rem;
  }

  @media only screen and (max-width: 600px) {
    background-position: 62% 42%;
  }
`;
