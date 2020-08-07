import React from 'react';
import { render } from '@testing-library/react';
import Faq from './Faq';

test('renders learn react link', () => {
  const { getByText } = render(<Faq />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
