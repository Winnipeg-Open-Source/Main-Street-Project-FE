import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Button } from 'pcln-design-system';
import Page from 'components/Page';
import Link from 'components/Link';
import DonorInformation from 'components/DonorInformation';
import DonationList from 'components/DonationList';
import useDonor from 'hooks/context/useDonor';
import { getDonorEditPath } from 'constants/paths';

const StyledDonorInformation = styled(DonorInformation)`
    margin-bottom: 8px;
`;

function Donor () {
    const { id } = useParams();
    const { isLoading, donor } = useDonor(id);
    const EditButton = () => <EditDonorButton id={id} />;

    const name = donor ? donor.name : 'Donor not found';
    const donations = donor && donor.donations;

    return (
        <Page isLoading={isLoading} title={name} renderAction={EditButton}>
            {isLoading || donor
                ? (
                    <>
                        <StyledDonorInformation isLoading={isLoading} {...donor} />
                        <DonationList isLoading={isLoading} donations={donations} />
                    </>
                )
                : 'Donor Not Found'
            }
        </Page>
    );
}

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

Donor.displayName = 'Donor';

export default Donor;
