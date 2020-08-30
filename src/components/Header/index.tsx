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
    margin: 2rem 15vw;
    height: 70vh;
    justify-content: center;

    & > :not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  .bg-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    overflow: hidden;

    > * {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .title {
    position: absolute;
    margin-top: 5rem;
    margin-left: 15vw;
  }

  h1 {
    display: inline-block;
    font-size: 4rem;
    line-break: 1rem;
    width: 40rem;
  }
  p {
    display: inline-block;
    font-size: 1.5rem;
    width: 25rem;
  }

  a {
    padding: 1rem 0;
    text-decoration: none;
    color: white;
    text-align: center;
    font-size: 1.5rem;
    border-radius: 1rem;
    height: 5rem;
    width: 20rem;
    border: 0.2rem solid white;
    transition: all 0.2s;

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
