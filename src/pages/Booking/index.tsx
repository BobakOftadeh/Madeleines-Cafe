import React, { useState } from 'react';
import styled from 'styled-components';
import { Router, RouteComponentProps, Link } from '@reach/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const BookingContainer = styled.div`
  display: grid;
  grid-template-rows: 65vh 35vh 20vh;
  margin: 0;
  .clear-main {
    background-color: var(--color-primary-pale);
  }

  h1 {
    display: inline-block;
    font-size: 4rem;
    line-break: 1rem;
    width: 40rem;
  }

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: var(--color-primary-dark);
  }

  h2 {
    line-height: 1rem;
  }

  .Header-form {
    padding: 3rem;
    color: #111111;
    display: flex;
    flex-direction: column;
    background-color: var(--color-primary-pale);
    & > *:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  button {
    border: none;
  }

  .form-input-text {
    border: none;
    padding: 1rem;
    border-bottom: 1px solid black;
    margin-bottom: 2%;
    background-color: inherit;

    &:focus {
      outline: none;
      &::placeholder {
        color: rgba(238, 238, 238, 1.5);
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
      font-size: 2rem;
      flex: 0 0 8%;
      transition: all 0.25s;
      backface-visibility: hidden;
      &:hover {
        transform: scale(1.25);
      }
    }
    span {
      height: 5rem;
      font-size: 3rem;
      text-align: center;
      flex: 1;
    }
  }
`;

const Booking: React.FC<RouteComponentProps> = () => {
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
    <BookingContainer>
      <Header>
        <div>
          <h1 className="title">dine</h1>
          <div className="container">
            <h2>Exquisite dinning since 1994</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
              repellat praesentium optio incidunt sed molestiae dolore sint
              maiores
            </p>
          </div>
        </div>
        <form action="#" className="Header-form">
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
          <label htmlFor="date">
            Pick a date
            <input type="text" id="month" maxLength={2} required />
            <input type="text" id="day" maxLength={2} required />
            <input type="text" id="year" maxLength={2} required />
          </label>
          <label htmlFor="time">
            Pick a time
            <input type="text" id="hour" maxLength={2} required />
            <input type="text" id="minutes" maxLength={2} required />
            <select name="meridiem" id="meridiem">
              <option value="am">AM</option>
              <option value="pm">PM</option>
            </select>
          </label>
          <div className="form-personCount">
            <button type="button" onClick={decrementPerson}>
              -
            </button>
            <span>{person} person</span>
            <button type="button" onClick={incrementPerson}>
              +
            </button>
          </div>
          <button>MAKE RESERVATION</button>
        </form>
      </Header>
      <div className="clear-main"></div>
      <Footer />
    </BookingContainer>
  );
};

export default Booking;
