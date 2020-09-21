import styled from 'styled-components';
import { Link } from '@reach/router';

export const ButtonWrapper = styled(Link)`
  display: grid;
  place-items: center;
  text-decoration: none;
  color: white;
  font-size: 1.8rem;
  border-radius: 1rem;
  height: 6rem;
  width: 22rem;
  border: 0.2rem solid white;
  transition: all 0.2s;
  margin-bottom: 13rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    background-color: var(--color-primary-dark);
    border: 0.2rem solid var(--color-primary-dark);
  }

  &:active {
    transform: translateY(0px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }

  @media only screen and (max-width: 1000px) {
    margin-bottom: 0;
  }
  @media only screen and (max-width: 600px) {
    font-size: 2.2rem;
    width: 26rem;
  }
`;
