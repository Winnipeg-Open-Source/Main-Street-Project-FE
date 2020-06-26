import React from 'react';
import { action } from '@storybook/addon-actions';
import Form from 'components/Form';
import ClothesDonationForm from './ClothesDonationForm';

const props = {
    name: 'T-Shirt',
    description: 'Pretty Cool T-Shirt',
    size: 'L',
    quantity: 5,
    notes: 'A bunch of notes',
    onChange: action('on change'),
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
    title: 'ClothesDonationForm',
    component: ClothesDonationForm,
};
