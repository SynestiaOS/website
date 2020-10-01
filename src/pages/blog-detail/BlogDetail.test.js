import React from 'react';
import { render } from '@testing-library/react';
import BlogDetail from './BlogDetail';

test('renders learn react link', () => {
  const { getByText } = render(<BlogDetail />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
