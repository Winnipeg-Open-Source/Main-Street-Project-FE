import React from 'react';
import { action } from '@storybook/addon-actions';
import RequisitionForm from './RequisitionForm';
import { mockItems } from 'storybook/mocks/items';
import { mockEmployees } from 'storybook/mocks/employees';

export const EmptyForm = () => (
    <RequisitionForm
        items={mockItems}
        employees={mockEmployees}
        onSaveClick={action('Saved')}
    />
);

export default {
    title: 'RequisitionForm',
    component: RequisitionForm,
};
