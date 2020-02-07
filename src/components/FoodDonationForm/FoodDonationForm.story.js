import React from 'react';
import { action } from '@storybook/addon-actions';
import { Flex } from 'pcln-design-system';
import FoodDonationForm from './FoodDonationForm';

const props = {
    name: 'Strawberries',
    description: 'Palette of Juicy Fruit',
    quantity: 5,
    retailValue: 100,
    condition: 'Perfect',
    notes: 'A bunch of notes',
    onNameChange: action('name change'),
    onDescriptionChange: action('description change'),
    onQuantityChange: action('quantity change'),
    onRetailValueChange: action('retail value change'),
    onConditionChange: action('condition change'),
    onLocationsChange: action('locations change'),
    onNotesChange: action('notes change'),
};

export const EmptyForm = () => (
    <Flex p={2}>
        <FoodDonationForm />
    </Flex>
);

export const CompletedForm = () => (
    <Flex p={2}>
        <FoodDonationForm {...props} />
    </Flex>
);

export default {
    title: 'FoodDonationForm',
    component: FoodDonationForm,
};
