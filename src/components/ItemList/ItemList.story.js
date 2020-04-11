import React from 'react';
import { action } from '@storybook/addon-actions';
import ItemList from './ItemList';
import { mockItemRequisition } from 'storybook/mocks/items';

export const EmptyList = () => <ItemList />;

export const List = () => <ItemList items={mockItemRequisition} onDeleteClick={action('Deleted')} />;

export default {
    title: 'ItemList',
    component: ItemList,
};
