import React from 'react';
import Page from 'components/Page';
import DonorCreationForm from 'components/DonorCreationForm';
import useSaving from 'hooks/useSaving';

function DonorCreate () {
    const { setSaving } = useSaving();

    const onSaveClick = (donor) => setSaving(true) && console.log('saved', donor);
    const onCancelClick = () => console.log('cancelled');

    return (
        <Page title='Create a donor'>
            <DonorCreationForm onSaveClick={onSaveClick} onCancelClick={onCancelClick} />
        </Page>
    );
}

DonorCreate.displayName = 'DonorCreate';

export default DonorCreate;
