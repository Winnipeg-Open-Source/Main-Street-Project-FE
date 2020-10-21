import React from 'react';
import renderWithTheme from 'tests/helpers/renderWithTheme';
import FoodDonationForm from './FoodDonationForm';
import { mockFoodDonationProps } from 'tests/mocks/MockDonationFormProps';

describe('FoodDonationForm', () => {
    it('renders without crashing', () => {
        const { asFragment } = renderWithTheme(<FoodDonationForm />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('has placeholders when empty', async () => {
        const { getByLabelText, getByPlaceholderText } = renderWithTheme(
            <FoodDonationForm />
        );

        const name = await getByPlaceholderText('Name');
        const description = await getByPlaceholderText('Description');
        const retailValue = await getByPlaceholderText('Retail Value ($)');
        const notes = await getByLabelText('Notes');

        expect(name.value).toBe('');
        expect(description.value).toBe('');
        expect(retailValue.value).toBe('');
        expect(notes.value).toBe('');
    });

    it('has all fields used', async () => {
        const { getByLabelText, getByPlaceholderText } = renderWithTheme(
            <FoodDonationForm {...mockFoodDonationProps} />
        );

        const name = await getByPlaceholderText('Name');
        const description = await getByPlaceholderText('Description');
        const retailValue = await getByPlaceholderText('Retail Value ($)');
        const notes = await getByLabelText('Notes');

        expect(name.value).toBe('Strawberries');
        expect(description.value).toBe('Palette of Juicy Fruit');
        expect(retailValue.value).toBe('100');
        expect(notes.value).toBe('A bunch of notes');
    });
});
