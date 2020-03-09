import React from 'react';
import { render } from '@testing-library/react';
import HouseholdItemDonationForm from './HouseholdItemDonationForm';
import { mockHouseholdItemDonationProps } from 'tests/mocks/MockDonationFormProps';

describe ('HouseholdItemDonationForm', () => {
    it ('renders without crashing', () => {
        const { asFragment } = render(<HouseholdItemDonationForm />);

        expect(asFragment()).toMatchSnapshot();
    });

    it ('has placeholders when empty', async () => {
        const { getByLabelText, getByPlaceholderText } = render(<HouseholdItemDonationForm />);

        const name = await getByPlaceholderText('Name');
        const description = await getByPlaceholderText('Description');
        const quantity = await getByPlaceholderText('Quantity');
        const notes = await getByLabelText('Notes');

        expect(name.value).toBe('');
        expect(description.value).toBe('');
        expect(quantity.value).toBe('');
        expect(notes.value).toBe('');
    });

    it ('has all fields used', async () => {
        const { getByLabelText, getByPlaceholderText } = render(<HouseholdItemDonationForm {...mockHouseholdItemDonationProps} />);

        const name = await getByPlaceholderText('Name');
        const description = await getByPlaceholderText('Description');
        const quantity = await getByPlaceholderText('Quantity');
        const notes = await getByLabelText('Notes');

        expect(name.value).toBe('Toilet Paper');
        expect(description.value).toBe('This toilet paper is 10-ply');
        expect(quantity.value).toBe('5');
        expect(notes.value).toBe('A bunch of notes');
    });
});
