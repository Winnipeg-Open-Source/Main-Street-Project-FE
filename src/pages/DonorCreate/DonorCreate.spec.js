import React from 'react';
import renderWithThemeAndRouter from 'tests/helpers/renderWithThemeAndRouter';
import DonorCreate from './DonorCreate';

describe ('DonorCreate', () => {
    it ('renders without crashing', () => {
        const { asFragment } = renderWithThemeAndRouter(<DonorCreate />);

        expect(asFragment()).toMatchSnapshot();
    });
});
