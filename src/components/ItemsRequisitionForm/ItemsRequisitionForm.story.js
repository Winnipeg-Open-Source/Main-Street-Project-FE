import React from 'react';
import ItemsRequisitionForm from './ItemsRequisitionForm';
import { mockItems } from 'storybook/mocks/items';

export const Default = () => <ItemsRequisitionForm items={mockItems} />;

export default {
    title: 'Forms|ItemsRequisitionForm',
    component: ItemsRequisitionForm,
};
