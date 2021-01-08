import React from 'react';
import { render } from '@testing-library/react';
import CardRow from './CardRow';

test('renders learn react link', () => {
  const { getByText } = render(<CardRow />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
