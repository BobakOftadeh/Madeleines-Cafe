import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const HeaderWrapper = styled.header`
  background-color: var(--color-primary-dark);
  color: white;

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

const Header = () => {
  return (
    <HeaderWrapper>
      <h1 className="title">dine</h1>
      <div className="container">
        <h1>Exquisite dinning since 1994</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
          repellat praesentium optio incidunt sed molestiae dolore sint maiores
        </p>
        <Link to="booking">Book A Table</Link>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
