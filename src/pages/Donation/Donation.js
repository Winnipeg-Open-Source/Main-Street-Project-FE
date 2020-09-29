import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Flex } from 'pcln-design-system';
import Page from 'components/Page';
import DonationInformation from 'components/DonationInformation';
import DonorInformation from 'components/DonorInformation';
import ItemList from 'components/ItemList';
import EditButton from 'containers/EditButton';
import useDonation from 'hooks/context/useDonation';
import useDonors from 'hooks/context/useDonors';

const StyledFlex = styled(Flex)`
    flex-direction: column;

    & > :not(:last-child) {
        margin-bottom: 8px;
    }
`;

function Donation () {
    const { id } = useParams();
    const { isLoading: isLoadingDonations, donation, onLoadDonations } = useDonation(id);
    const { isLoading: isLoadingDonors, donors, onLoadDonors } = useDonors();

    const isLoading = isLoadingDonations || isLoadingDonors;
    const title = donation ? donation.title : 'Donation not found';
    const donor = !isLoadingDonations && !isLoadingDonors && donors.find(donor => donor.id === donation.id);
    const items = donation && donation.items;

    useEffect(() => {
        isLoadingDonations && onLoadDonations();
        isLoadingDonors && onLoadDonors();
    }, []);

    return (
        <Page isLoading={isLoading} title={title} renderAction={EditButton}>
            {isLoading || donation
                ? (
                    <StyledFlex>
                        <DonationInformation isLoading={isLoading} {...donation} />
                        <DonorInformation isLoading={isLoading} {...donor} />
                        <ItemList isLoading={isLoading} items={items} />
                    </StyledFlex>
                )
                : 'Donation Not Found'
            }
        </Page>
    );
}

Donation.displayName = 'Donation';

export default Donation;
