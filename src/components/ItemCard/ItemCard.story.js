import React from 'react';
import { action } from '@storybook/addon-actions';
import ItemCard from './ItemCard';

export const Default = () => <ItemCard name='Name' quantity={5} onDeleteClick={action('delete')} />;
export const QuantityName = () => <ItemCard name='Paper Towel' quantity={5} quantityName='Rolls' onDeleteClick={action('delete')} />;

export default {
    title: 'ItemCard',
    component: ItemCard,
};
