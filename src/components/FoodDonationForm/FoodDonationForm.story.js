import React from 'react';
import { action } from '@storybook/addon-actions';
import Form from 'components/Form';
import FoodDonationForm from './FoodDonationForm';
import { mockLocations } from 'tests/mocks/locations';
import { mockLineItems } from 'tests/mocks/items';

const props = {
    name: 'Strawberries',
    description: 'Palette of Juicy Fruit',
    quantityName: 'Rolls',
    retailValue: 100,
    locations: mockLocations,
    lineItems: mockLineItems,
    notes: 'A bunch of notes',
    onChange: action('on change'),
    onAddLineItemClick: action('on line item clicked'),
    onItemQuantityChange: action('on line item quantity changed'),
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
    title: 'Forms|FoodDonationForm',
    component: FoodDonationForm,
};
