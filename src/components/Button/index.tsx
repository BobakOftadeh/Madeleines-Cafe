import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  background-color: transparent;
  color: white;
  border-radius: 1rem;
  height: 5rem;
  width: 20rem;
  border: 0.2rem solid white;
`;

const Button = () => {
  return <ButtonWrapper>Book A Table</ButtonWrapper>;
};

export default Button;
