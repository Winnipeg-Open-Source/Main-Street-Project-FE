import React from 'react';
import DonationList from 'components/DonationList';
import Input from 'components/Input';
import Page from 'components/Page';
import NewButton from 'containers/NewButton';
import useDonations from 'hooks/context/useDonations';
import useRoute from 'hooks/useRoute';

function Donations () {
    const { isLoading, donations } = useDonations();
    const goToDonorPage = useRoute();

    const disabled = isLoading || (donations && donations.length === 0);

    return (
        <Page isLoading={isLoading} title='Donations' renderAction={NewButton}>
            <Input id='search' disabled={disabled} placeholder='Search' mb={3} />
            <DonationList isLoading={isLoading} donations={donations} onDonationClick={goToDonorPage} />
        </Page>
    );
}

Donations.displayName = 'DonationsPage';

export default Donations;
