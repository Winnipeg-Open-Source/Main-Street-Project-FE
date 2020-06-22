import React from 'react';
import SavingOverlayComponent from 'components/SavingOverlay';
import useSaving from 'hooks/context/useSaving';

function SavingOverlay () {
    const { isSaving } = useSaving();

    return (
        <SavingOverlayComponent isSaving={isSaving} />
    );
}

SavingOverlay.displayName = 'SavingOverlay';

export default SavingOverlay;
