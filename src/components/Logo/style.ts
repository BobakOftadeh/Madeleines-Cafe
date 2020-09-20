import styled from 'styled-components';

export const LogoWrapper = styled.div`
  background-color: transparent;
  color: white;
  border-radius: 1rem;
  height: 5rem;
  width: 20rem;
  transform: scale(1.15);

  .logo-container {
    margin-bottom: 10rem;
    font-weight: 400;
    display: inline-block;
    font-size: 6.4rem;
    font-weight: 400;
    width: 50rem;
    line-height: 6rem;
    border: none;
    padding: 0;

    &:hover {
      box-shadow: none;
    }
    @media only screen and (max-width: 1000px) {
      margin-bottom: 6rem;
    }

    @media only screen and (max-width: 500px) {
      margin-bottom: 3rem;
      font-size: 5.4rem;
      width: 100%;
    }
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

    @media only screen and (max-width: 1000px) {
      margin-bottom: 0;
    }
  }

  @media only screen and (max-width: 1000px) {
    display: flex;
    align-items: center;
    width: auto;
  }

  @media only screen and (max-width: 420px) {
    width: auto;
  }
`;
