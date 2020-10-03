import React from 'react';
import { action } from '@storybook/addon-actions';
import Form from 'components/Form';
import HouseholdItemDonationForm from './HouseholdItemDonationForm';
import { mockLocations } from 'tests/mocks/locations';
import { mockLineItems } from 'tests/mocks/items';

const props = {
    name: 'Toilet Paper',
    description: 'This toilet paper is 10-ply',
    quantityName: 'Rolls',
    locations: mockLocations,
    lineItems: mockLineItems,
    notes: 'A bunch of notes',
    onChange: action('on change'),
    onAddLineItemClick: action('on line item clicked'),
    onItemQuantityChange: action('on line item quantity changed'),
};

export const EmptyForm = () => (
    <Form>
        <HouseholdItemDonationForm />
    </Form>
);

export const CompletedForm = () => (
    <Form>
        <HouseholdItemDonationForm {...props} />
    </Form>
);

export default {
    title: 'Forms/HouseholdItemDonationForm',
    component: HouseholdItemDonationForm,
};
