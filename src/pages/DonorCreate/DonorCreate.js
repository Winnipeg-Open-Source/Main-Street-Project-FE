import React from 'react';
import Page from 'components/Page';
import DonorCreationForm from 'components/DonorCreationForm';
import useDonors from 'hooks/context/useDonors';
import useRoute from 'hooks/useRoute';
import useSaveResource from 'hooks/useSaveResource';
import { DONORS_API_PATH } from 'constants/api';
import { DONORS_PATH } from 'constants/paths';

function DonorCreate () {
    const { onSaveDonor } = useDonors();
    const { handleSave } = useSaveResource(
        DONORS_API_PATH,
        DONORS_PATH,
        onSaveDonor
    );
    const redirectToDonors = useRoute(DONORS_PATH);

    return (
        <Page title='Create a donor'>
            <DonorCreationForm
                onSaveClick={handleSave}
                onCancelClick={redirectToDonors}
            />
        </Page>
    );
}

DonorCreate.displayName = 'DonorCreate';

export default DonorCreate;
