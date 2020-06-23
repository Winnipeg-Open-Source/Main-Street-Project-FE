import React from 'react';
import { Button } from 'pcln-design-system';
import Page from 'components/Page';
import DonorsList from 'components/DonorsList';
import Input from 'components/Input';
import Link from 'components/Link';
import useDonors from 'hooks/context/useDonors';
import useRoute from 'hooks/useRoute';
import { DONOR_NEW_PATH } from 'constants/paths';

function NewDonorButton () {
    return (
        <Link to={DONOR_NEW_PATH}>
            <Button size='small'>
                New Donor
            </Button>
        </Link>
    );
}

function Donors () {
    const { isLoading, donors } = useDonors();
    const goToDonorPage = useRoute();

    const disabled = isLoading || (donors && donors.length === 0);

    return (
        <Page isLoading={isLoading} title='Donors' renderAction={NewDonorButton}>
            <Input id='search' disabled={disabled} placeholder='Search' mb={3} />
            <DonorsList isLoading={isLoading} donors={donors} onDonorClick={goToDonorPage} />
        </Page>
    );
}

Donors.displayName = 'Donors';

export default Donors;
