import React from 'react';
import { render } from '@testing-library/react';
import Videos from './Videos';

test('renders learn react link', () => {
  const { getByText } = render(<Videos />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
