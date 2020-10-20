import React from 'react';
import { render } from '@testing-library/react';
import GithubLogin from './GithubLogin';

test('renders learn react link', () => {
  const { getByText } = render(<GithubLogin />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
