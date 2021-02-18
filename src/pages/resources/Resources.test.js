import React from 'react';
import { render } from '@testing-library/react';
import Resources from './Resources';

test('renders learn react link', () => {
  const { getByText } = render(<Resources />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
