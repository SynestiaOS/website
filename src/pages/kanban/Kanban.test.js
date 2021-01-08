import React from 'react';
import { render } from '@testing-library/react';
import Kanban from './Kanban';

test('renders learn react link', () => {
  const { getByText } = render(<Kanban />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
