import React from 'react';
import { render } from '@testing-library/react';
import MiscellaneousDonationForm from './MiscellaneousDonationForm';

const props = {
    name: 'Misc Name',
    description: 'A miscellaneous item',
    quantity: 3,
    notes: 'Something I had lying around that I do not need anymore',
    onNameChange: () => {},
    onDescriptionChange: () => {},
    onQuantityChange: () => {},
    onNotesChange: () => {},
};

describe ('MiscellaneousDonationForm', () => {
    it ('renders without crashing', () => {
        const { asFragment } = render(<MiscellaneousDonationForm />);

        expect(asFragment()).toMatchSnapshot();
    });

    it ('has placeholders when empty', async () => {
        const { getByLabelText, getByPlaceholderText } = render(<MiscellaneousDonationForm />);

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
        const { getByLabelText, getByPlaceholderText } = render(<MiscellaneousDonationForm {...props} />);

        const name = await getByPlaceholderText('Name');
        const description = await getByPlaceholderText('Description');
        const quantity = await getByPlaceholderText('Quantity');
        const notes = await getByLabelText('Notes');

        expect(name.value).toBe('Misc Name');
        expect(description.value).toBe('A miscellaneous item');
        expect(quantity.value).toBe('3');
        expect(notes.value).toBe('Something I had lying around that I do not need anymore');
    });
});
