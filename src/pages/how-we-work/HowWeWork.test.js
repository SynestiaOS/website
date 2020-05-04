import React from 'react';
import { render } from '@testing-library/react';
import HowWeWork from './HowWeWork';

test('renders learn react link', () => {
  const { getByText } = render(<HowWeWork />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
