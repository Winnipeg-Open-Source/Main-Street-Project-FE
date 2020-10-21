import React from 'react';
import renderWithTheme from 'tests/helpers/renderWithTheme';
import HouseholdItemDonationForm from './HouseholdItemDonationForm';
import { mockHouseholdItemDonationProps } from 'tests/mocks/MockDonationFormProps';

describe('HouseholdItemDonationForm', () => {
    it('renders without crashing', () => {
        const { asFragment } = renderWithTheme(<HouseholdItemDonationForm />);

        expect(asFragment()).toMatchSnapshot();
    });

    it('has placeholders when empty', async () => {
        const { getByLabelText, getByPlaceholderText } = renderWithTheme(
            <HouseholdItemDonationForm />
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
            <HouseholdItemDonationForm {...mockHouseholdItemDonationProps} />
        );

        const name = await getByPlaceholderText('Name');
        const description = await getByPlaceholderText('Description');
        const notes = await getByLabelText('Notes');

        expect(name.value).toBe('Toilet Paper');
        expect(description.value).toBe('This toilet paper is 10-ply');
        expect(notes.value).toBe('A bunch of notes');
    });
});
