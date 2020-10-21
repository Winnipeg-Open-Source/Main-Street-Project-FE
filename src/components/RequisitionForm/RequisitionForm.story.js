import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import RequisitionForm from './RequisitionForm';
import { mockItems } from 'storybook/mocks/items';
import { mockEmployees } from 'storybook/mocks/employees';

export const EmptyForm = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const onSelectItemChange = (item) =>
        setSelectedItems([...selectedItems, item]);

    return (
        <RequisitionForm
            items={mockItems}
            selectedItems={selectedItems}
            employees={mockEmployees}
            onSaveClick={action('Saved')}
            onSelectItemChange={onSelectItemChange}
        />
    );
};

export const FilledForm = () => (
    <RequisitionForm
        items={mockItems}
        selectedItems={mockItems}
        employees={mockEmployees}
        onSaveClick={action('Saved')}
    />
);

export default {
    title: 'RequisitionForm',
    component: RequisitionForm,
};
