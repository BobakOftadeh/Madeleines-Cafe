import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const HeaderWrapper = styled.header`
  color: white;
  position: relative;
  background-image: linear-gradient(
    rgba(34, 40, 49, 0.7),
    rgba(34, 40, 49, 0.7)
  );

  .container {
    display: flex;
    flex-direction: column;
    margin-left: 25rem;
    height: 100%;
    justify-content: center;
  }

  .bg-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    overflow: hidden;
    object-fit: cover;

    > * {
      height: 100%;
      width: 100%;
    }
  }

  .title {
    margin-bottom: 11rem;
    font-weight: 400;
  }

  h1 {
    display: inline-block;
    font-size: 6.4rem;
    font-weight: 300;
    width: 50rem;
    line-height: 6rem;
    margin-bottom: 2rem;
  }

  p {
    display: inline-block;
    font-size: 1.8rem;
    width: 40rem;
    margin-bottom: 3rem;
  }

  a {
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
    }

    &:active {
      transform: translateY(0px);
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    }
  }
`;

interface MyProps {
  children?: React.ReactNode;
  type?: string;
}

const Header: React.FC<MyProps> = (props) => {
  if (props.type === '1') {
    return <HeaderWrapper>{props.children}</HeaderWrapper>;
  } else {
    return <header>{props.children}</header>;
  }
};

export default Header;
