import React from 'react';
import { render } from '@testing-library/react';
import Highlight from './index';

test('renders Highlight component', () => {
  const { getByText, getByAltText } = render(<Highlight />);
  getByText('A few highlights from our menu');
  getByAltText('Coffee');
  getByAltText('Egg Sandwich');
  getByAltText('Pancakes with nuts');
});
