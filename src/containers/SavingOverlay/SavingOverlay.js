import React from 'react';
import LoadingOverlayComponent from 'components/LoadingOverlay';
import useSaving from 'hooks/context/useSaving';

function SavingOverlay () {
    const { isSaving } = useSaving();

    return (
        <LoadingOverlayComponent isLoading={isSaving}>
            Saving...
        </LoadingOverlayComponent>
    );
}

SavingOverlay.displayName = 'SavingOverlay';

export default SavingOverlay;
