import React, { useState } from 'react';
import { FormWarpper } from './style';

const Form: React.FC = () => {
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
