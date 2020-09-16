import React, { memo } from 'react';
import PropTypes from 'prop-types';
import List from 'components/List';
import DonationCard from 'components/DonationCard';

function DonationListSkeleton ({ className }) {
    return (
        <List className={className}>
            <DonationCard isLoading />
            <DonationCard isLoading />
            <DonationCard isLoading />
        </List>
    );
}

DonationListSkeleton.displayName = 'DonationListSkeleton';

DonationListSkeleton.propTypes = {
    className: PropTypes.string,
};

DonationListSkeleton.defaultProps = {
    className: '',
};

export default memo(DonationListSkeleton);
