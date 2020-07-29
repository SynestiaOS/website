import React from 'react';
import { render } from '@testing-library/react';
import Sponsor from './Sponsor';

test('renders learn react link', () => {
  const { getByText } = render(<Sponsor />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
