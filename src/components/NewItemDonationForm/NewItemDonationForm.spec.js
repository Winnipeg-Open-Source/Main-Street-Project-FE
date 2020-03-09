import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithTheme from 'tests/helpers/renderWithTheme';
import NewItemDonationForm from './NewItemDonationForm';

describe ('NewItemDonationForm', () => {
    it ('renders without crashing', () => {
        const { asFragment } = renderWithTheme(<NewItemDonationForm />);

        expect(asFragment()).toMatchSnapshot();
    });

    it ('can select food donation form', () => {
        const { queryByPlaceholderText, getByTestId } = renderWithTheme(<NewItemDonationForm />);

        const itemTypeSelect = getByTestId('item-type-select');

        expect(queryByPlaceholderText('Retail Value ($)')).not.toBeInTheDocument();
        fireEvent.change(itemTypeSelect, { target: { value: 'Food' }});
        expect(queryByPlaceholderText('Retail Value ($)')).toBeInTheDocument();
    });

    it ('can select clothing donation form', () => {
        const { queryByPlaceholderText, getByTestId } = renderWithTheme(<NewItemDonationForm />);

        const itemTypeSelect = getByTestId('item-type-select');

        expect(queryByPlaceholderText('Quantity')).not.toBeInTheDocument();
        fireEvent.change(itemTypeSelect, { target: { value: 'Clothing' }});
        expect(queryByPlaceholderText('Quantity')).toBeInTheDocument();
    });

    it ('can select household item donation form', () => {
        const { queryByPlaceholderText, getByTestId } = renderWithTheme(<NewItemDonationForm />);

        const itemTypeSelect = getByTestId('item-type-select');

        expect(queryByPlaceholderText('Quantity')).not.toBeInTheDocument();
        fireEvent.change(itemTypeSelect, { target: { value: 'Household Item' }});
        expect(queryByPlaceholderText('Quantity')).toBeInTheDocument();
    });

    it ('can select miscellaneous donation form', () => {
        const { queryByPlaceholderText, getByTestId } = renderWithTheme(<NewItemDonationForm />);

        const itemTypeSelect = getByTestId('item-type-select');

        expect(queryByPlaceholderText('Quantity')).not.toBeInTheDocument();
        fireEvent.change(itemTypeSelect, { target: { value: 'Miscellaneous' }});
        expect(queryByPlaceholderText('Quantity')).toBeInTheDocument();
    });
});
