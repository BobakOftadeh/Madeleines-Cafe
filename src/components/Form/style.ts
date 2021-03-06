import styled from 'styled-components';

export const FormWarpper = styled.form`
  padding: 4rem 3rem;
  position: absolute;
  top: 50%;
  left: 55%;
  width: 50rem;
  font-size: 2rem;
  color: var(--color-primary-dark);
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary-pale);
  box-shadow: rgba(56, 66, 85, 0.5) 0px 75px 100px -50px;

  @media only screen and (max-width: 1000px) {
    top: 115%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media only screen and (max-width: 500px) {
    top: 122%;
    width: 100%;
  }

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }

  button {
    border: none;
  }

  .form-input-text {
    border: none;
    padding: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    margin-bottom: 2rem;
    background-color: inherit;
    transition: all 1s;
    font-size: inherit;
    min-width: 0;

    &:focus,
    &:hover {
      border-bottom: 1px solid rgba(0, 0, 0, 1);
      &::placeholder {
        color: black;
      }
    }

    &:active {
    }
  }

  .form-personCount {
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;
    padding: 1rem;
    padding-top: 0;
    margin-bottom: 3rem;

    button {
      flex: 0 0 8%;
      font-size: inherit;
      transition: all 0.25s;
      backface-visibility: hidden;
      background-color: inherit;
      outline: none;
      &:hover {
        transform: scale(1.4);
      }
    }

    span {
      height: 5rem;
      font-size: 3rem;
      text-align: center;
      flex: 1;
    }
  }

  .form-label__container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    & > * {
      flex: 0 0 20%;
      width: 100%;
    }

    & > :first-child {
      flex: 0 0 25%;
      width: 100%;
    }
  }

  .form-button-reservation {
    padding: 1rem 0;
    text-decoration: none;
    color: var(--color-primary-dark);
    background-color: var(--color-primary-pale);
    text-align: center;
    font-family: inherit;
    font-size: 1.8rem;
    border-radius: 1rem;
    height: 5rem;
    width: 100%;
    border: 0.2rem solid var(--color-primary-dark);
    transition: all 0.2s;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
      background-color: var(--color-primary-dark);
      color: white;
      border: 0.2rem solid white;
    }

    &:active {
      outline: none;
      transform: translateY(0px);
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    }
  }
`;
