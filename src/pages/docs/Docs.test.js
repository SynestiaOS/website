import React from 'react';
import { render } from '@testing-library/react';
import Docs from './Docs';

test('renders learn react link', () => {
  const { getByText } = render(<Docs />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
