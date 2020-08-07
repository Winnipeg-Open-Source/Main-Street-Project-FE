import React from 'react';
import { action } from '@storybook/addon-actions';
import Form from 'components/Form';
import MiscellaneousDonationForm from './MiscellaneousDonationForm';
import { mockLocations } from 'tests/mocks/locations';
import { mockLineItems } from 'tests/mocks/items';

const props = {
    name: 'Misc Name',
    description: 'A miscellaneous item',
    quantityName: 'Rolls',
    locations: mockLocations,
    lineItems: mockLineItems,
    notes: 'Something I had lying around that I do not need anymore',
    onChange: action('on change'),
    onAddLineItemClick: action('on line item clicked'),
    onItemQuantityChange: action('on line item quantity changed'),
};

export const EmptyForm = () => (
    <Form>
        <MiscellaneousDonationForm />
    </Form>
);

export const CompletedForm = () => (
    <Form>
        <MiscellaneousDonationForm {...props} />
    </Form>
);

export default {
    title: 'Forms|MiscellaneousDonationForm',
    component: MiscellaneousDonationForm,
};
