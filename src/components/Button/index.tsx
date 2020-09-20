import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps, Link } from '@reach/router';

const ButtonWrapper = styled(Link)`
  padding: 1.5rem 0;
  text-decoration: none;
  color: white;
  text-align: center;
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
    width: 26rem;
  }
`;

interface ButtonProps {
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  return <ButtonWrapper to="booking">{props.children}</ButtonWrapper>;
};

export default Button;
