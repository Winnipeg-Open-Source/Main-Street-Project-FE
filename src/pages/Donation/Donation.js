import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'pcln-design-system';
import Link from 'components/Link';
import Page from 'components/Page';
import useDonation from 'hooks/useDonation';
import { getDonationEditPath } from 'constants/paths';

function EditDonationButton ({ id }) {
    const donationEditPath = getDonationEditPath(id);

    return (
        <Link to={donationEditPath}>
            <Button size='small'>
                Edit Donation
            </Button>
        </Link>
    );
}

function Donation () {
    const { id } = useParams();
    const { isLoading, donation } = useDonation(id);
    const EditButton = () => <EditDonationButton id={id} />;

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
