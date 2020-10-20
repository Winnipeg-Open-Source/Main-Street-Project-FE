import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import ItemForm from './ItemForm';
import useForm from 'hooks/useForm';
import { mockLocations } from 'tests/mocks/locations';
import { mockLineItems } from 'tests/mocks/items';

export const EmptyForm = () => {
    const [locations] = useState(mockLocations);
    const [lineItems, setLineItems] = useState([]);
    const { state, onChange } = useForm({ itemType: 'Food' });

    const addLineItem = (lineItem) =>
        setLineItems([
            ...lineItems,
            {
                ...lineItem,
                locationName: lineItem.name,
            },
        ]);

    const itemQuantityChange = (_, lineItemId, value) => {
        setLineItems([
            ...lineItems.map((lineItem) =>
                lineItem.id === lineItemId
                    ? {
                          ...lineItem,
                          quantity: value,
                      }
                    : lineItem
            ),
        ]);
    };

    return (
        <ItemForm
            {...state}
            locations={locations}
            lineItems={lineItems}
            onChange={onChange}
            onAddLineItemClick={addLineItem}
            onItemQuantityChange={itemQuantityChange}
            onSaveClick={action('Saved')}
            onCancelClick={action('Cancel')}
        />
    );
};

export const CompletedForm = () => {
    const { state, onChange } = useForm({ itemType: 'Food' });

    return (
        <ItemForm
            {...state}
            locations={mockLocations}
            lineItems={mockLineItems}
            onChange={onChange}
            onSaveClick={action('Saved')}
            onCancelClick={action('Cancel')}
        />
    );
};

export default {
    title: 'Forms/ItemForm',
    component: ItemForm,
};
