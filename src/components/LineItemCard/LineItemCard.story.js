import React from 'react';
import LineItemCard from './LineItemCard';
import useCounter from 'hooks/useCounter';

export const Default = () => {
    return (
        <LineItemCard
            name='Freezer 2'
            quantity={10}
            quantityName='Rolls'
        />
    );
}

export const WithAvailableQuantity = () => {
    return (
        <LineItemCard
            name='Freezer 2'
            quantity={10}
            quantityName='Rolls'
            availableQuantity={20}
        />
    );
}

export default {
    title: 'LineItemCard',
    component: LineItemCard,
};
