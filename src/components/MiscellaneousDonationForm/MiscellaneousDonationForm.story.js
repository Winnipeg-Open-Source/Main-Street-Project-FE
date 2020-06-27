import React from 'react';
import { action } from '@storybook/addon-actions';
import Form from 'components/Form';
import MiscellaneousDonationForm from './MiscellaneousDonationForm';

const props = {
    name: 'Misc Name',
    description: 'A miscellaneous item',
    quantity: 3,
    notes: 'Something I had lying around that I do not need anymore',
    onChange: action('on change'),
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
    title: 'MiscellaneousDonationForm',
    component: MiscellaneousDonationForm,
};
