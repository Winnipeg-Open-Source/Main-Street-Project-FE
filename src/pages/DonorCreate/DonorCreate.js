import React from 'react';
import Page from 'components/Page';
import DonorCreationForm from 'components/DonorCreationForm';
import useRoute from 'hooks/useRoute';
import useSaveDonor from 'hooks/useSaveDonor';
import { DONORS_PATH } from 'constants/paths';

function DonorCreate () {
    const { saveDonor } = useSaveDonor();
    const redirectToDonors = useRoute(DONORS_PATH);

    return (
        <Page title='Create a donor'>
            <DonorCreationForm onSaveClick={saveDonor} onCancelClick={redirectToDonors} />
        </Page>
    );
}

DonorCreate.displayName = 'DonorCreate';

export default DonorCreate;
