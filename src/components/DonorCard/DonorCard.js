import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'pcln-design-system';
import Card from 'components/Card';

function DonorCard ({ className, name, lastDonationDate, onClick }) {
    return (
        <Card className={className} onClick={onClick}>
            <Text color='text.darkest' fontSize={1} bold>{name}</Text>
            <Text color='text.light' fontSize={1}>Last Donation: {lastDonationDate || '-'}</Text>
        </Card>
    );
}

DonorCard.displayName = 'DonorCard';

DonorCard.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    lastDonationDate: PropTypes.string,
};

DonorCard.defaultProps = {
    className: '',
};

export default memo(DonorCard);
