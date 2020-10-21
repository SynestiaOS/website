import React from 'react';
import { render } from '@testing-library/react';
import GithubInfo from './GithubInfo';

test('renders learn react link', () => {
  const { getByText } = render(<GithubInfo />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
