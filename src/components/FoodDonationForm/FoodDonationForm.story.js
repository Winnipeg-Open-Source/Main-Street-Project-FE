import React from 'react';
import { action } from '@storybook/addon-actions';
import Form from 'components/Form';
import FoodDonationForm from './FoodDonationForm';

const props = {
    name: 'Strawberries',
    description: 'Palette of Juicy Fruit',
    quantity: 5,
    retailValue: 100,
    condition: 'Perfect',
    notes: 'A bunch of notes',
    onChange: action('on change'),
};

export const EmptyForm = () => (
    <Form>
        <FoodDonationForm />
    </Form>
);

export const CompletedForm = () => (
    <Form>
        <FoodDonationForm {...props} />
    </Form>
);

export default {
    title: 'FoodDonationForm',
    component: FoodDonationForm,
};
