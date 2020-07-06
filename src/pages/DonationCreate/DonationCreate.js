import React, { useEffect } from 'react';
import Page from 'components/Page';
import DonationForm from 'containers/DonationForm';
import useDonors from 'hooks/context/useDonors';
import useItems from 'hooks/context/useItems';

function DonationCreate () {
    const { isLoading: isLoadingDonors, onLoadDonors } = useDonors();
    const { isLoading: isLoadingItems, onLoadItems } = useItems();

    useEffect(() => {
        isLoadingDonors && onLoadDonors();
        isLoadingItems && onLoadItems();
    }, []);

    return (
        <Page title='New Donation'>
            <DonationForm />
        </Page>
    );
}

DonationCreate.displayName = 'DonationCreate';

export default DonationCreate;
