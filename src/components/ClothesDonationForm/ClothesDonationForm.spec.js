import React from 'react';
import { render } from '@testing-library/react';
import ClothesDonationForm from './ClothesDonationForm';

const props = {
    name: 'T-Shirt',
    description: 'Pretty Cool T-Shirt',
    size: 'L',
    quantity: 5,
    notes: 'A bunch of notes',
    onNameChange: () => {},
    onDescriptionChange: () => {},
    onSizeChange: () => {},
    onQuantityChange: () => {},
    onNotesChange: () => {},
};

describe ('ClothesDonationForm', () => {
    it ('renders without crashing', () => {
        const { asFragment } = render(<ClothesDonationForm />);

        expect(asFragment()).toMatchSnapshot();
    });

    it ('has placeholders when empty', async () => {
        const { getByLabelText, getByPlaceholderText, getByTestId } = render(<ClothesDonationForm />);

        const name = await getByPlaceholderText('Name');
        const description = await getByPlaceholderText('Description');
        const size = await getByTestId('Size');
        const quantity = await getByPlaceholderText('Quantity');
        const notes = await getByLabelText('Notes');

        expect(name.value).toBe('');
        expect(description.value).toBe('');
        expect(size.value).toBe('M');
        expect(quantity.value).toBe('');
        expect(notes.value).toBe('');
    });

    it ('has all fields used', async () => {
        const { getByLabelText, getByPlaceholderText, getByTestId } = render(<ClothesDonationForm {...props} />);

        const name = await getByPlaceholderText('Name');
        const description = await getByPlaceholderText('Description');
        const size = await getByTestId('Size');
        const quantity = await getByPlaceholderText('Quantity');
        const notes = await getByLabelText('Notes');

        expect(name.value).toBe('T-Shirt');
        expect(description.value).toBe('Pretty Cool T-Shirt');
        expect(size.value).toBe('L');
        expect(quantity.value).toBe('5');
        expect(notes.value).toBe('A bunch of notes');
    });
});
