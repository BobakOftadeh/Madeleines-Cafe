import React from 'react';
import { render } from '@testing-library/react';
import About from './index';

test('renders About component', () => {
  const { getByText, getByAltText } = render(<About />);
  getByText('Enjoyable place for all the family');
  getByText('The most locally sourced food');
  getByAltText('coffee blends');
  getByAltText('cafe view');
});
