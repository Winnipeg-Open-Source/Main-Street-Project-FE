import React from 'react';
import { action } from '@storybook/addon-actions';
import { Flex } from 'pcln-design-system';
import MiscellaneousDonationForm from './MiscellaneousDonationForm';

const props = {
    name: 'Misc Name',
    description: 'A miscellaneous item',
    quantity: 3,
    notes: 'Something I had lying around that I do not need anymore',
    onNameChange: action('name changed'),
    onDescriptionChange: action('description changed'),
    onQuantityChange: action('quantity changed'),
    onNotesChange: action('notes changed'),
};

export const EmptyForm = () => (
    <Flex p={2}>
        <MiscellaneousDonationForm />
    </Flex>
);

export const CompletedForm = () => (
    <Flex p={2}>
        <MiscellaneousDonationForm {...props} />
    </Flex>
);

export default {
    title: 'MiscellaneousDonationForm',
    component: MiscellaneousDonationForm,
};
