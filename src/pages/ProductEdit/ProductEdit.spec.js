import React from 'react';
import renderWithThemeAndRouter from 'tests/helpers/renderWithThemeAndRouter';
import ProductEditPage from './ProductEdit';

describe ('ProductEditPage', () => {
    it ('renders without crashing', () => {
        const { asFragment } = renderWithThemeAndRouter(<ProductEditPage />);

        expect(asFragment()).toMatchSnapshot();
    });
});
