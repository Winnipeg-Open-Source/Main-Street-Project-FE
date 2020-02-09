import React from 'react';
import { render } from '@testing-library/react';
import HouseholdItemDonationForm from './HouseholdItemDonationForm';

const props = {
    name: 'Toilet Paper',
    description: 'This toilet paper is 10-ply',
    quantity: 5,
    notes: 'A bunch of notes',
    onNameChange: () => {},
    onDescriptionChange: () => {},
    onQuantityChange: () => {},
    onNotesChange: () => {},
};

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
        const { getByLabelText, getByPlaceholderText } = render(<HouseholdItemDonationForm {...props} />);

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
