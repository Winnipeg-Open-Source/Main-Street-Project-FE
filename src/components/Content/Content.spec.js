import React from 'react';
import renderWithTheme from 'tests/helpers/renderWithTheme';
import Content from './Content';

describe ('Content', () => {
    it ('renders without crashing', () => {
        const { asFragment } = renderWithTheme(<Content />);

        expect(asFragment()).toMatchSnapshot();
    });

    it ('renders content successfully', () => {
        const { getByText } = renderWithTheme(<Content>Content</Content>);

        expect(getByText(/Content/i)).toBeInTheDocument();
    });
});
