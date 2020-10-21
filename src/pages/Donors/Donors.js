import React, { useEffect } from 'react';
import Page from 'components/Page';
import DonorsList from 'components/DonorsList';
import Input from 'components/Input';
import NewButton from 'containers/NewButton';
import useDonors from 'hooks/context/useDonors';
import useRoute from 'hooks/useRoute';

function Donors () {
    const { isLoading, donors, onLoadDonors } = useDonors();
    const goToDonorPage = useRoute();

    const disabled = isLoading || (donors && donors.length === 0);

    useEffect(() => {
        isLoading && onLoadDonors();
    }, []);

    return (
        <Page isLoading={isLoading} title='Donors' renderAction={NewButton}>
            <Input
                id='search'
                disabled={disabled}
                placeholder='Search'
                mb={3}
            />
            <DonorsList
                isLoading={isLoading}
                donors={donors}
                onDonorClick={goToDonorPage}
            />
        </Page>
    );
}

Donors.displayName = 'Donors';

export default Donors;
