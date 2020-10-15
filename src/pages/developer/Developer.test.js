import React from 'react';
import { render } from '@testing-library/react';
import Developer from './Developer';

test('renders learn react link', () => {
  const { getByText } = render(<Developer />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
