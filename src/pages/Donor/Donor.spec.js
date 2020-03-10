import React from 'react';
import renderWithThemeAndRouter from 'tests/helpers/renderWithThemeAndRouter';
import DonorPage from './Donor';

describe ('DonorPage', () => {
    it ('renders without crashing', () => {
        const { asFragment } = renderWithThemeAndRouter(<DonorPage />);

        expect(asFragment()).toMatchSnapshot();
    });
});
