import React from 'react';
import { render } from '@testing-library/react';
import TestSplash from './TestSplash';

test('renders learn react link', () => {
  const { getByText } = render(<TestSplash />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
