import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './index';

test('change persons quantity', () => {
  const { getByText, getByRole } = render(<Form />);
  const incrementButton = getByRole('increment');
  const decrementButton = getByText('-');

  userEvent.click(incrementButton);
  getByText('2 people');
  userEvent.click(incrementButton);
  getByText('3 people');
  userEvent.click(decrementButton);
  getByText('2 people');
});

xtest('input limit on forms', () => {
  const { getByText, getByRole, getByPlaceholderText } = render(<Form />);
  const monthInput = getByPlaceholderText('MM');

  userEvent.type(monthInput, '0110');
  expect(monthInput).toHaveValue('01');
});
