import React from 'react';
import { ButtonWrapper } from './style';

interface ButtonProps {
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  return <ButtonWrapper to="booking">{props.children}</ButtonWrapper>;
};

export default Button;
