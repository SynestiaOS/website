import React from 'react';
import {render} from '@testing-library/react';
import ForumDetail from './GithubIssuesDetail';

test('renders learn react link', () => {
    const {getByText} = render(<ForumDetail/>);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
