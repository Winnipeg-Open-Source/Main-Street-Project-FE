import React from 'react';
import Page from 'components/Page';
import DonationForm from 'containers/DonationForm';

function DonationCreate () {
    return (
        <Page title='New Donation'>
            <DonationForm />
        </Page>
    );
}

DonationCreate.displayName = 'DonationCreate';

export default DonationCreate;
