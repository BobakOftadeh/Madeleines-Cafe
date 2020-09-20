import React from 'react';
import { LogoWrapper } from './style';
import { Link } from '@reach/router';

const Logo: React.FC = () => {
  return (
    <LogoWrapper className="logo-wrapper">
      <Link to="/ " className="logo-container">
        Madeleine's Cafe
      </Link>
    </LogoWrapper>
  );
};

export default Logo;
