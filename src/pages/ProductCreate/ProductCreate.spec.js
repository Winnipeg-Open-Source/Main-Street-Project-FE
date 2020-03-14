import React from 'react';
import renderWithThemeAndRouter from 'tests/helpers/renderWithThemeAndRouter';
import ProductCreatePage from './ProductCreate';

describe ('ProductCreatePage', () => {
    it ('renders without crashing', () => {
        const { asFragment } = renderWithThemeAndRouter(<ProductCreatePage />);

        expect(asFragment()).toMatchSnapshot();
    });
});
