import React from 'react';
import { action } from '@storybook/addon-actions';
import ItemList from './ItemList';
import { mockItems } from 'storybook/mocks/items';

export const EmptyList = () => <ItemList />;

export const List = () => <ItemList items={mockItems} onDeleteClick={action('Deleted')} />;

export default {
    title: 'ItemList',
    component: ItemList,
};
