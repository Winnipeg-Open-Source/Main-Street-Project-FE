import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'pcln-design-system';
import Card from 'components/Card';

function DonationInformation ({ className, title, description, donationDate, notes }) {
    return (
        <Card className={className}>
            <Text color='text.darkest' fontSize={1} bold>{title} - {donationDate}</Text>
            <Text color='text.light' fontSize={1}>{description}</Text>
            <Text color='text.light' fontSize={1}>{notes}</Text>
        </Card>
    );
}

DonationInformation.displayName = 'DonationInformation';

DonationInformation.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    donationDate: PropTypes.string.isRequired,
    notes: PropTypes.string,
};

DonationInformation.defaultProps = {
    className: '',
};

export default memo(DonationInformation);
