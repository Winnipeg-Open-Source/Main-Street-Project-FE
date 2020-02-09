import React from 'react';
import { action } from '@storybook/addon-actions';
import { Flex } from 'pcln-design-system';
import ClothesDonationForm from './ClothesDonationForm';

const props = {
    name: 'T-Shirt',
    description: 'Pretty Cool T-Shirt',
    size: 'L',
    quantity: 5,
    notes: 'A bunch of notes',
    onNameChange: action('name change'),
    onDescriptionChange: action('description change'),
    onSizeChange: action('size change'),
    onQuantityChange: action('quantity change'),
    onNotesChange: action('notes change'),
};

export const EmptyForm = () => (
    <Flex p={2}>
        <ClothesDonationForm />
    </Flex>
);

export const CompletedForm = () => (
    <Flex p={2}>
        <ClothesDonationForm {...props} />
    </Flex>
);

export default {
    title: 'ClothesDonationForm',
    component: ClothesDonationForm,
};
