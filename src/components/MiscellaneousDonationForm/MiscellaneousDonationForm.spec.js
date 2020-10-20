import React from 'react';
import renderWithTheme from 'tests/helpers/renderWithTheme';
import MiscellaneousDonationForm from './MiscellaneousDonationForm';
import { mockMiscellaneousDonationProps } from 'tests/mocks/MockDonationFormProps';

describe('MiscellaneousDonationForm', () => {
    it('renders without crashing', () => {
        const { asFragment } = renderWithTheme(<MiscellaneousDonationForm />);

        expect(asFragment()).toMatchSnapshot();
    });

    it('has placeholders when empty', async () => {
        const { getByLabelText, getByPlaceholderText } = renderWithTheme(
            <MiscellaneousDonationForm />
        );

        const name = await getByPlaceholderText('Name');
        const description = await getByPlaceholderText('Description');
        const notes = await getByLabelText('Notes');

        expect(name.value).toBe('');
        expect(description.value).toBe('');
        expect(notes.value).toBe('');
    });

    it('has all fields used', async () => {
        const { getByLabelText, getByPlaceholderText } = renderWithTheme(
            <MiscellaneousDonationForm {...mockMiscellaneousDonationProps} />
        );

        const name = await getByPlaceholderText('Name');
        const description = await getByPlaceholderText('Description');
        const notes = await getByLabelText('Notes');

        expect(name.value).toBe('Misc Name');
        expect(description.value).toBe('A miscellaneous item');
        expect(notes.value).toBe(
            'Something I had lying around that I do not need anymore'
        );
    });
});
