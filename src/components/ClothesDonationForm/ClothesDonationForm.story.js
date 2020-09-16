import React from 'react';
import { action } from '@storybook/addon-actions';
import Form from 'components/Form';
import ClothesDonationForm from './ClothesDonationForm';
import { mockLocations } from 'tests/mocks/locations';
import { mockLineItems } from 'tests/mocks/items';

const props = {
    name: 'T-Shirt',
    description: 'Pretty Cool T-Shirt',
    size: 'L',
    locations: mockLocations,
    lineItems: mockLineItems,
    notes: 'A bunch of notes',
    onChange: action('on change'),
    onAddLineItemClick: action('on line item clicked'),
    onItemQuantityChange: action('on line item quantity changed'),
};

export const EmptyForm = () => (
    <Form>
        <ClothesDonationForm />
    </Form>
);

export const CompletedForm = () => (
    <Form>
        <ClothesDonationForm {...props} />
    </Form>
);

export default {
    title: 'Forms|ClothesDonationForm',
    component: ClothesDonationForm,
};
