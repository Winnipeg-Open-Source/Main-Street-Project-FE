import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'pcln-design-system';
import Card from 'components/Card';
import { getDonorPath } from 'constants/paths';

function DonorCard ({ id, className, name, lastDonationDate, onClick }) {
    const onDonorClick = () => onClick(getDonorPath(id));

    return (
        <Card
            className={className}
            onClick={onDonorClick}
            data-testid='donor-card'
        >
            <Text color='text.darkest' fontSize={1} bold>
                {name}
            </Text>
            <Text color='text.light' fontSize={1}>
                Last Donation: {lastDonationDate || '-'}
            </Text>
        </Card>
    );
}

DonorCard.displayName = 'DonorCard';

DonorCard.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    className: PropTypes.string,
    name: PropTypes.string,
    lastDonationDate: PropTypes.string,
    onClick: PropTypes.func,
};

DonorCard.defaultProps = {
    className: '',
};

export default memo(DonorCard);
