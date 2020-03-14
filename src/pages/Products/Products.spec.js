import React from 'react';
import renderWithThemeAndRouter from 'tests/helpers/renderWithThemeAndRouter';
import ProductsPage from './Products';

describe ('ProductsPage', () => {
    it ('renders without crashing', () => {
        const { asFragment } = renderWithThemeAndRouter(<ProductsPage />);

        expect(asFragment()).toMatchSnapshot();
    });
});
