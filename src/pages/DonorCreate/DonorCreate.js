import React from 'react';
import Page from 'components/Page';
import DonorCreationForm from 'components/DonorCreationForm';

function DonorCreate () {
    return (
        <Page title='Create a donor'>
            <DonorCreationForm />
        </Page>
    );
}

DonorCreate.displayName = 'DonorCreate';

export default DonorCreate;
