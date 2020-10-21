import { useState } from 'react';

function useCounter (defaultValue = 0, minValue = null, maxValue = null) {
    const [count, setCount] = useState(defaultValue);

    const increment = () => {
        if (maxValue === null || count < maxValue) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (minValue === null || count > minValue) {
            setCount(count - 1);
        }
    };

    const onChange = (value) => {
        let newValue;

        if (maxValue !== null && value > maxValue) {
            newValue = maxValue;
        } else if (minValue !== null && value < minValue) {
            newValue = minValue;
        } else {
            newValue = value;
        }

        setCount(newValue);
    };

    return {
        count,
        setCount: onChange,
        increment,
        decrement,
    };
}

export default useCounter;
