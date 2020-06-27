import React from 'react';
import { action } from '@storybook/addon-actions';
import ItemForm from './ItemForm';
import useForm from 'hooks/useForm';

export const Default = () => {
    const { state, onChange } = useForm({ itemType: 'Food' });

    return (
        <ItemForm
            {...state}
            onChange={onChange}
            onSaveClick={action('Saved')}
            onCancelClick={action('Cancel')}
        />
    );
};

export default {
    title: 'ItemForm',
    component: ItemForm,
};
