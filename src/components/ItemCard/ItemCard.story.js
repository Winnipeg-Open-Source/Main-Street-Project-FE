import React from 'react';
import { action } from '@storybook/addon-actions';
import ItemCard from './';
import useCounter from 'hooks/useCounter';
import { mockItems } from 'storybook/mocks/items';

export const Default = () => {
    const { count, increment, decrement, setCount } = useCounter();
    const onChange = (evt) => setCount(evt.target.value);
    
    return (
        <ItemCard
            {...mockItems[2]}
            count={count}
            onIncrementClick={increment}
            onDecrementClick={decrement}
            onCountChange={onChange}
            onDeleteClick={action('delete')}
        />
    );
}

export const QuantityName = () => <ItemCard {...mockItems[0]} />;

export const Loading = () => <ItemCard isLoading />;

export default {
    title: 'ItemCard',
    component: ItemCard,
};
