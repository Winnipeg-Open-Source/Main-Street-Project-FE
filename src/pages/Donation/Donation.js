import React from 'react';
import { useParams } from 'react-router-dom';
import Page from 'components/Page';
import EditButton from 'containers/EditButton';
import useDonation from 'hooks/context/useDonation';

function Donation () {
    const { id } = useParams();
    const { isLoading, donation } = useDonation(id);

    const title = donation ? donation.title : 'Donation not found';

    return (
        <Page isLoading={isLoading} title={title} renderAction={EditButton}>
            {isLoading || donation
                ? (
                    <div>Loaded</div>
                )
                : 'Donation Not Found'
            }
        </Page>
    );
}

Donation.displayName = 'Donation';

export default Donation;
