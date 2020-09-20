import React from 'react';
import { HeaderWrapper } from './style';

interface MyProps {
  children?: React.ReactNode;
}

const Header: React.FC<MyProps> = (props) => {
  return <HeaderWrapper>{props.children}</HeaderWrapper>;
};

export default Header;
