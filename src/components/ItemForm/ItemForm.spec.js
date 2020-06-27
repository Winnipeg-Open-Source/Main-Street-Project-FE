import React from 'react';
import renderWithTheme from 'tests/helpers/renderWithTheme';
import ItemForm from './ItemForm';

describe ('ItemForm', () => {
    it ('renders without crashing', () => {
        const { asFragment } = renderWithTheme(<ItemForm />);

        expect(asFragment()).toMatchSnapshot();
    });

    it ('can select food donation form', () => {
        const { queryByPlaceholderText } = renderWithTheme(<ItemForm itemType='Food' />);
        expect(queryByPlaceholderText('Retail Value ($)')).toBeInTheDocument();
    });

    it ('can select clothing donation form', () => {
        const { queryByPlaceholderText } = renderWithTheme(<ItemForm itemType='Clothing' />);
        expect(queryByPlaceholderText('Quantity')).toBeInTheDocument();
    });

    it ('can select household item donation form', () => {
        const { queryByPlaceholderText } = renderWithTheme(<ItemForm itemType='Household Item' />);
        expect(queryByPlaceholderText('Quantity')).toBeInTheDocument();
    });

    it ('can select miscellaneous donation form', () => {
        const { queryByPlaceholderText } = renderWithTheme(<ItemForm itemType='Miscellaneous' />);
        expect(queryByPlaceholderText('Quantity')).toBeInTheDocument();
    });
});
