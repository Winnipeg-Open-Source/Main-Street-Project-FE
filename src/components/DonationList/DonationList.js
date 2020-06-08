import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'pcln-design-system';
import List from 'components/List';
import DonationCard from 'components/DonationCard';

function DonationList ({ className, isLoading, donations, onDonationClick }) {
    return (
        <List className={className}>
            {donations && donations.length > 0
                ? donations.map(donation => (
                    <DonationCard
                        key={donation.id}
                        isLoading={isLoading}
                        {...donation}
                        onClick={onDonationClick}
                    />
                ))
                : <Text textAlign='center'>No donations yet...</Text>
            }
        </List>
    );
}

DonationList.displayName = 'DonationList';

DonationList.propTypes = {
    className: PropTypes.string,
    isLoading: PropTypes.bool,
    donations: PropTypes.array,
    onDonationClick: PropTypes.func,
};

DonationList.defaultProps = {
    className: '',
};

export default memo(DonationList);
