import React from 'react';
import { action } from '@storybook/addon-actions';
import ItemCard from './ItemCard';
import { mockItems } from 'storybook/mocks/items';

export const Default = () => <ItemCard {...mockItems[2]} onDeleteClick={action('delete')} />;
export const QuantityName = () => <ItemCard {...mockItems[0]} />;

export default {
    title: 'ItemCard',
    component: ItemCard,
};
