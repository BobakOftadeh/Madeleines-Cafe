import React from 'react';
import { render } from '@testing-library/react';
import Home from './index';

test('renders learn react link', () => {
  const { getByText } = render(<Home />);
  getByText('Exquisite Dining Since 1994');
});