import React from 'react';
import Page from 'components/Page';
import DonorCreationForm from 'components/DonorCreationForm';
import useRoute from 'hooks/useRoute';
import useSaving from 'hooks/useSaving';
import { DONORS_PATH } from 'constants/paths';

function DonorCreate () {
    const redirectToDonors = useRoute(DONORS_PATH);
    const { setSaving } = useSaving();

    const onSaveClick = (donor) => setSaving(true);
    const onCancelClick = redirectToDonors;

    return (
        <Page title='Create a donor'>
            <DonorCreationForm onSaveClick={onSaveClick} onCancelClick={onCancelClick} />
        </Page>
    );
}

DonorCreate.displayName = 'DonorCreate';

export default DonorCreate;
