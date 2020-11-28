import React from 'react';
import { render } from '@testing-library/react';
import Tools from './Tools';

test('renders learn react link', () => {
  const { getByText } = render(<Tools />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
