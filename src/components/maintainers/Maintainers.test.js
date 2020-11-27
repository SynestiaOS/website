import React from 'react';
import { render } from '@testing-library/react';
import Maintainers from './Maintainers';

test('renders learn react link', () => {
  const { getByText } = render(<Maintainers />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
