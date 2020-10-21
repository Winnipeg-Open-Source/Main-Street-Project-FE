import { useState } from 'react';

function useToggle (defaultValue) {
    const [value, onChange] = useState(defaultValue || false);

    function onToggle () {
        onChange(!value);
    }

    return [value, onToggle, onChange];
}

export default useToggle;
