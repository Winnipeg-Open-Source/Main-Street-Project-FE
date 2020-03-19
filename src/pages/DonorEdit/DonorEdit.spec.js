import React from 'react';
import renderWithThemeAndRouter from 'tests/helpers/renderWithThemeAndRouter';
import DonorEditPage from './DonorEdit';

describe ('DonorEditPage', () => {
    it ('renders without crashing', () => {
        const { asFragment } = renderWithThemeAndRouter(<DonorEditPage />);

        expect(asFragment()).toMatchSnapshot();
    });
});
