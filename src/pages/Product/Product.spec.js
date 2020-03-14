import React from 'react';
import renderWithThemeAndRouter from 'tests/helpers/renderWithThemeAndRouter';
import ProductPage from './Product';

describe ('ProductPage', () => {
    it ('renders without crashing', () => {
        const { asFragment } = renderWithThemeAndRouter(<ProductPage />);

        expect(asFragment()).toMatchSnapshot();
    });
});
