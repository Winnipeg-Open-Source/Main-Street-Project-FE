import React from 'react';
import { action } from '@storybook/addon-actions';
import Form from 'components/Form';
import HouseholdItemDonationForm from './HouseholdItemDonationForm';

const props = {
    name: 'Toilet Paper',
    description: 'This toilet paper is 10-ply',
    quantity: 5,
    notes: 'A bunch of notes',
    onChange: action('on change'),
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
    title: 'HouseholdItemDonationForm',
    component: HouseholdItemDonationForm,
};
