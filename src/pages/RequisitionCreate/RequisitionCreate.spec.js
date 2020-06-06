import React from 'react';
import renderWithThemeAndRouter from 'tests/helpers/renderWithThemeAndRouter';
import RequisitionCreate from './RequisitionCreate';

describe ('RequisitionCreate', () => {
    it ('renders without crashing', () => {
        const { asFragment } = renderWithThemeAndRouter(<RequisitionCreate />);
        expect(asFragment()).toMatchSnapshot();
    });
});
