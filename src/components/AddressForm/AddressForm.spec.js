import React from 'react';
import renderWithTheme from 'tests/helpers/renderWithTheme';
import AddressForm from './AddressForm';

const props = {
    address: '123 Test Street',
    city: 'Winnipeg',
    province: 'MB',
    postalCode: 'ABC123',
};

describe ('AddressForm', () => {
    it ('renders without crashing', () => {
        const { asFragment } = renderWithTheme(<AddressForm />);

        expect(asFragment()).toMatchSnapshot();
    });

    it ('renders properly', () => {
        const { getByPlaceholderText, getByTestId } = renderWithTheme(<AddressForm {...props} />);

        expect(getByPlaceholderText('Street Address').value).toBe('123 Test Street');
        expect(getByPlaceholderText('City').value).toBe('Winnipeg');
        expect(getByPlaceholderText('Postal Code').value).toBe('ABC123');
        expect(getByTestId('province-select').value).toBe('MB');
    });
});
