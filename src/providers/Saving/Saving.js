import React, { useState } from 'react';
import SavingContext from 'context/Saving';

function SavingProvider ({ children }) {
    const [ isSaving, setSaving ] = useState(false);

    const props = {
        isSaving,
        setSaving,
    };

    return (
        <SavingContext.Provider value={props}>
            {children}
        </SavingContext.Provider>
    );
}

SavingProvider.displayName = 'SavingProvider';

export default SavingProvider;
