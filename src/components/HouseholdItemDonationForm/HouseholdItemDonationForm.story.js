import React from 'react';
import { action } from '@storybook/addon-actions';
import { Flex } from 'pcln-design-system';
import HouseholdItemDonationForm from './HouseholdItemDonationForm';

const props = {
    name: 'Toilet Paper',
    description: 'This toilet paper is 10-ply',
    quantity: 5,
    notes: 'A bunch of notes',
    onNameChange: action('name changed'),
    onDescriptionChange: action('description changed'),
    onQuantityChange: action('quantity changed'),
    onNotesChange: action('notes changed'),
};

export const EmptyForm = () => (
    <Flex p={2}>
        <HouseholdItemDonationForm />
    </Flex>
);

export const CompletedForm = () => (
    <Flex p={2}>
        <HouseholdItemDonationForm {...props} />
    </Flex>
);

export default {
    title: 'HouseholdItemDonationForm',
    component: HouseholdItemDonationForm,
};
