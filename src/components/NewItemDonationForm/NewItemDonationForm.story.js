import React from 'react';
import { action } from '@storybook/addon-actions';
import NewItemDonationForm from './NewItemDonationForm';

const genericProps = {
    onCancelClick: action('cancel clicked'),
    onSaveClick: action('save clicked'),
};

const props = {
    name: 'Item Name',
    description: 'Item Description',
    quantity: 5,
    size: 'L',
    retailValue: 500,
    condition: 'Great',
    notes: 'Some notes',
    onNameChange: action('name changed'),
    onDescriptionChange: action('description changed'),
    onQuantityChange: action('quantity changed'),
    onSizeChange: action('size changed'),
    onRetailValueChange: action('retail value changed'),
    onConditionChange: action('condition changed'),
    onNotesChange: action('notes changed'),
};

export const EmptyForm = () => <NewItemDonationForm {...genericProps} />;

export const CompletedForm = () => <NewItemDonationForm {...genericProps} {...props} />;

export default {
    title: 'NewItemDonationForm',
    component: NewItemDonationForm,
};
