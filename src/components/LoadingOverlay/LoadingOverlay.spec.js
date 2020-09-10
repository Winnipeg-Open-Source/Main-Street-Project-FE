import React from 'react';
import renderWithTheme from 'tests/helpers/renderWithTheme';
import LoadingOverlay from './LoadingOverlay';

describe ('LoadingOverlay', () => {
    it ('renders overlay when loading', () => {
        const { queryByText } = renderWithTheme(<LoadingOverlay isLoading>Loading...</LoadingOverlay>);
        expect(queryByText('Loading...')).toBeInTheDocument();
    });

    it ('renders null when not loading', () => {
        const { queryByText } = renderWithTheme(<LoadingOverlay />);
        expect(queryByText('Loading...')).not.toBeInTheDocument();
    });
});
