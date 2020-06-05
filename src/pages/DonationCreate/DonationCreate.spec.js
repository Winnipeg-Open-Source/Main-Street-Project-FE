import React from 'react';
import renderWithThemeAndRouter from 'tests/helpers/renderWithThemeAndRouter';
import DonationCreate from './DonationCreate';

describe ('DonationCreate', () => {
    it ('renders without crashing', () => {
        const { asFragment } = renderWithThemeAndRouter(<DonationCreate />);
        expect(asFragment()).toMatchSnapshot();
    });
});
