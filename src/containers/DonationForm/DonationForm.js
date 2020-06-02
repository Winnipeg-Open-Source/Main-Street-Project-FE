import React from 'react';
import DonationFormComponent from 'components/DonationForm';
import useDonors from 'hooks/useDonors';
import useItems from 'hooks/useItems';
import useRoute from 'hooks/useRoute';
import useDonationFormReducer from 'hooks/useDonationFormReducer';
import { DONATIONS_PATH } from 'constants/paths';

function DonationForm () {
    const { isLoading: isLoadingDonors, donors } = useDonors();
    const { isLoading: isLoadingItems, items } = useItems();
    const goToDonations = useRoute(DONATIONS_PATH);

    const donationProps = useDonationFormReducer();

    return (
        <DonationFormComponent
            {...donationProps}
            isLoadingDonors={isLoadingDonors}
            isLoadingItems={isLoadingItems}
            donors={donors}
            items={items}
            onCancelClick={goToDonations}
        />
    );
}

DonationForm.displayName = 'DonationForm';

export default DonationForm;
