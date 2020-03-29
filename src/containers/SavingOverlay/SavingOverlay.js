import React from 'react';
import SavingOverlayComponent from 'components/SavingOverlay';
import useSaving from 'hooks/useSaving';

function SavingOverlay () {
    const { isSaving } = useSaving();

    return (
        <SavingOverlayComponent isSaving={isSaving} />
    );
}

SavingOverlay.displayName = 'SavingOverlay';

export default SavingOverlay;
