import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Reservation from './index';

test('link to booking page', () => {
  const { getByText } = render(<Reservation />);
  getByText('Book A Table');
  getByText('Ready to make a Reservation?');
});
