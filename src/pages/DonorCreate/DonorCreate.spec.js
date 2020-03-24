import React from 'react';
import renderWithTheme from 'tests/helpers/renderWithTheme';
import DonorCreate from './DonorCreate';

describe ('DonorCreate', () => {
    it ('renders without crashing', () => {
        const { asFragment } = renderWithTheme(<DonorCreate />);

        expect(asFragment()).toMatchSnapshot();
    });
});
