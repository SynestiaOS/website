import React from 'react';
import { render } from '@testing-library/react';
import Cpu from './Cpu';

test('renders learn react link', () => {
  const { getByText } = render(<Cpu />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
