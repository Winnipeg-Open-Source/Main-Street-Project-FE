import React, { useEffect } from 'react';
import Page from 'components/Page';
import DonationForm from 'containers/DonationForm';
import useDonors from 'hooks/context/useDonors';

function DonationCreate () {
    const { isLoading, onLoadDonors } = useDonors();

    useEffect(() => {
        isLoading && onLoadDonors();
    }, []);

    return (
        <Page title='New Donation'>
            <DonationForm />
        </Page>
    );
}

DonationCreate.displayName = 'DonationCreate';

export default DonationCreate;
