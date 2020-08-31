import React, { useState } from 'react';
import styled from 'styled-components';

const FormWarpper = styled.form`
  padding: 4rem 3rem;
  position: relative;
  top: 40%;
  width: 30%;
  font-size: 2rem;
  color: #111111;
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary-pale);
  box-shadow: rgba(56, 66, 85, 0.5) 0px 75px 100px -50px;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }

  button {
    outline: none;
    border: none;
  }

  .form-input-text {
    border: none;
    padding: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    margin-bottom: 2%;
    background-color: inherit;
    transition: all 1s;
    font-size: inherit;

    &:focus,
    &:hover {
      outline: none;
      border-bottom: 1px solid rgba(0, 0, 0, 1);
      &::placeholder {
        color: black;
      }
    }

    &:active {
      outline: none;
    }
  }

  .form-personCount {
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;
    padding: 1rem;

    button {
      flex: 0 0 8%;
      font-size: inherit;
      transition: all 0.25s;
      backface-visibility: hidden;
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
    color: black;
    text-align: center;
    font-family: inherit;
    font-size: 1.5rem;
    border-radius: 1rem;
    height: 5rem;
    width: 100%;
    border: 0.2rem solid black;
    transition: all 0.2s;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
      background-color: black;
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

const Form = () => {
  const [person, setPerson] = useState<number>(1);

  const incrementPerson = () => {
    if (person < 8) {
      setPerson(person + 1);
    }
  };

  const decrementPerson = () => {
    if (person > 1) {
      setPerson(person - 1);
    }
  };
  return (
    <FormWarpper>
      <input
        type="text"
        placeholder="Name"
        id="name"
        className="form-input-text"
        required
      />
      <input
        type="email"
        placeholder="Email"
        id="email"
        className="form-input-text"
        required
      />
      <div className="form-label__container">
        <label htmlFor="date">Pick a date</label>
        <input
          type="text"
          id="month"
          placeholder="MM"
          maxLength={2}
          className="form-input-text"
          required
        />
        <input
          type="text"
          id="day"
          placeholder="DD"
          maxLength={2}
          className="form-input-text"
          required
        />
        <input
          type="text"
          id="year"
          placeholder="YYYY"
          maxLength={4}
          className="form-input-text"
          required
        />
      </div>
      <div className="form-label__container">
        <label htmlFor="time">Pick a time</label>
        <input
          type="text"
          id="hour"
          placeholder="09"
          className="form-input-text"
          maxLength={2}
          required
        />
        <input
          type="text"
          className="form-input-text"
          id="minutes"
          placeholder="00"
          maxLength={2}
          required
        />
        <select name="meridiem" className="form-input-text" id="meridiem">
          <option value="am">AM</option>
          <option value="pm">PM</option>
        </select>
      </div>
      <div className="form-personCount">
        <button type="button" onClick={decrementPerson}>
          -
        </button>
        <span>{person} people</span>
        <button type="button" onClick={incrementPerson}>
          +
        </button>
      </div>
      <button className="form-button-reservation">MAKE RESERVATION</button>
    </FormWarpper>
  );
};

export default Form;
