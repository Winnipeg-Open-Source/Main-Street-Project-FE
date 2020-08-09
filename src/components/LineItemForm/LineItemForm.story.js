import React, { useState } from 'react';
import LineItemForm from './LineItemForm';
import { mockLineItems } from 'tests/mocks/items';
import { mockLocations } from 'tests/mocks/locations';

export const NoLocations = () => <LineItemForm />;

export const Filled = () => {
    return (
        <LineItemForm
            locations={mockLocations}
            lineItems={mockLineItems}
        />
    );
};

export const Fillable = () => {
    const [ lineItems, setLineItems ] = useState([]);
    
    const addLineItem = (item) => setLineItems([ ...lineItems, item ]);
    const removeLineItem = (id) => setLineItems(lineItems.filter(lineItem => lineItem.id !== id));

    return (
        <LineItemForm
            locations={mockLocations}
            lineItems={lineItems}
            onAddClick={addLineItem}
            onRemoveClick={removeLineItem}
        />
    );
};

export default {
    title: 'LineItemForm',
    component: LineItemForm,
};
