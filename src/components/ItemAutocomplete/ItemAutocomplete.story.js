import React from 'react';
import { action } from '@storybook/addon-actions';
import ItemAutocomplete from './ItemAutocomplete';
import { mockItems } from 'storybook/mocks/items';

export const Default = () => (
    <ItemAutocomplete items={mockItems} onChange={action('changed')} />
);

export default {
    title: 'ItemAutocomplete',
    component: ItemAutocomplete,
};
