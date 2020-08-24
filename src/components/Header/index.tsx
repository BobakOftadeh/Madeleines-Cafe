import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background-color: var(--color-primary-dark);
  color: white;

  .container {
    display: flex;
    flex-direction: column;
    margin: 2rem 20rem;
    height: 70vh;
    justify-content: center;

    & > :not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  .title {
    position: absolute;
    margin-top: 5rem;
    margin-left: 20rem;
  }

  h1 {
    display: inline-block;
    font-size: 4rem;
    line-break: 1rem;
    width: 40rem;
  }
  h3 {
    display: inline-block;
    font-size: 1.5rem;
    width: 25rem;
  }
  button {
    background-color: transparent;
    color: white;
    border-radius: 1rem;
    height: 5rem;
    width: 20rem;
    border: 0.2rem solid white;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1 className="title">dine</h1>
      <div className="container">
        <h1>Exquisite dinning since 1994</h1>
        <h3>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
          repellat praesentium optio incidunt sed molestiae dolore sint maiores
        </h3>
        <button>Book A Table</button>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
