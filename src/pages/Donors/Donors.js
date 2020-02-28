import React from 'react';
import Page from 'components/Page';
import { Input } from 'pcln-design-system';
import DonorsList from 'components/DonorsList';

const donors = [
    {
        id: 1,
        name: 'Costco',
        lastDonationDate: '2019 December 20',
    },
    {
        id: 2,
        name: 'Costco',
        lastDonationDate: '2019 December 20',
    },
    {
        id: 3,
        name: 'Costco',
        lastDonationDate: '2019 December 20',
    },
];

function Donors () {
    return (
        <Page title='Donors' actionText='New Donor'>
            <Input id='search' placeholder='Search' mb={3} />
            <DonorsList donors={donors} />
        </Page>
    );
}

Donors.displayName = 'Donors';

export default Donors;
