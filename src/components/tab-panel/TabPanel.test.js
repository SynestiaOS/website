import React from 'react';
import { render } from '@testing-library/react';
import TabPanel from './TabPanel';

test('renders learn react link', () => {
  const { getByText } = render(<TabPanel />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
