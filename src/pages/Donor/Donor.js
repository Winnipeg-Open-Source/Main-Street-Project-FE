import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Page from 'components/Page';
import DonorInformation from 'components/DonorInformation';
import DonationList from 'components/DonationList';
import EditButton from 'containers/EditButton';
import useDonor from 'hooks/context/useDonor';

const StyledDonorInformation = styled(DonorInformation)`
    margin-bottom: 8px;
`;

function Donor () {
    const { id } = useParams();
    const { isLoading, donor } = useDonor(id);

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

Donor.displayName = 'Donor';

export default Donor;
