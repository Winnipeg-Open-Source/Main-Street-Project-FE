import React from 'react';
import renderWithTheme from 'tests/helpers/renderWithTheme';
import SavingOverlay from './SavingOverlay';

describe ('SavingOverlay', () => {
    it ('renders overlay when saving', () => {
        const { queryByText } = renderWithTheme(<SavingOverlay isSaving />);
        expect(queryByText('Saving...')).toBeInTheDocument();
    });

    it ('renders null when not saving', () => {
        const { queryByText } = renderWithTheme(<SavingOverlay />);
        expect(queryByText('Saving...')).not.toBeInTheDocument();
    });
});
