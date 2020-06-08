import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'pcln-design-system';
import Card from 'components/Card';
import { getDonationPath } from 'constants/paths';

function DonationCard ({ id, className, title, donationDate, onClick }) {
    const onDonationClick = () => onClick(getDonationPath(id));

    const date = donationDate || 'Unknown Donation Date';

    return (
        <Card className={className} onClick={onDonationClick}>
            <Text color='text.darkest' fontSize={1} bold>{title}</Text>
            <Text color='text.darkest' fontSize={1}>Donated: {date}</Text>
        </Card>
    );
}

DonationCard.displayName = 'DonationCard';

DonationCard.propTypes = {
    id: PropTypes.number,
    className: PropTypes.string,
    title: PropTypes.string,
    donationDate: PropTypes.string,
    onClick: PropTypes.func,
}

DonationCard.defaultProps = {
    className: '',
};

export default memo(DonationCard);
