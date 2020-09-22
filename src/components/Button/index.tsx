import React from 'react';
import { ButtonWrapper } from './style';

interface ButtonProps {
  children?: React.ReactNode;
  route: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return <ButtonWrapper to={props.route}>{props.children}</ButtonWrapper>;
};

export default Button;
