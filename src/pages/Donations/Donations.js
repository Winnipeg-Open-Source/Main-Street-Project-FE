import React from 'react';
import { Button } from 'pcln-design-system';
import DonationList from 'components/DonationList';
import Input from 'components/Input';
import Link from 'components/Link';
import Page from 'components/Page';
import useDonations from 'hooks/useDonations';
import useRoute from 'hooks/useRoute';
import { DONATION_NEW_PATH } from 'constants/paths';

function NewDonationButton () {
    return (
        <Link to={DONATION_NEW_PATH}>
            <Button size='small'>
                New Donation
            </Button>
        </Link>
    );
}

function Donations () {
    const { isLoading, donations } = useDonations();
    const goToDonorPage = useRoute();

    const disabled = isLoading || (donations && donations.length === 0);

    return (
        <Page isLoading={isLoading} title='Donations' renderAction={NewDonationButton}>
            <Input id='search' disabled={disabled} placeholder='Search' mb={3} />
            <DonationList isLoading={isLoading} donations={donations} onDonationClick={goToDonorPage} />
        </Page>
    );
}

Donations.displayName = 'DonationsPage';

export default Donations;
