import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'pcln-design-system';
import Page from 'components/Page';
import Link from 'components/Link';
import DonorInformation from 'components/DonorInformation';
import DonationList from 'components/DonationList';
import useDonor from 'hooks/useDonor';
import { getDonorEditPath } from 'constants/paths';

function EditDonorButton ({ id }) {
    const donorEditPath = getDonorEditPath(id);

    return (
        <Link to={donorEditPath}>
            <Button size='small'>
                Edit Donor
            </Button>
        </Link>
    );
}

function Donor () {
    const { id } = useParams();
    const donor = useDonor(id);
    const EditButton = () => <EditDonorButton id={id} />;

    const name = donor ? donor.name : 'Donor Not Found';

    return (
        <Page title={name} renderAction={EditButton}>
            {donor
                ? (
                    <>
                        <DonorInformation {...donor} />
                        <DonationList donations={donor.donations} />
                    </>
                )
                : 'Donor Not Found'
            }
        </Page>
    );
}

export default Donor;
