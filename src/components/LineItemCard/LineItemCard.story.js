import React from 'react';
import LineItemCard from './LineItemCard';
import useCounter from 'hooks/useCounter';

export const Default = () => {
    const { count, increment, decrement, setCount } = useCounter(0, 0, 10);
    const onChange = (evt) => setCount(evt.target.value);

    return (
        <LineItemCard
            locationName='Freezer 2'
            quantity={10}
            quantityName='Rolls'
            count={count}
            onIncrementClick={increment}
            onDecrementClick={decrement}
            onCountChange={onChange}
        />
    );
}

export default {
    title: 'LineItemCard',
    component: LineItemCard,
};
