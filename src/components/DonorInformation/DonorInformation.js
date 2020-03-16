import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Card, Text } from 'pcln-design-system';

function DonorInformation ({ className, address, city, email, phoneNumber }) {
    return (
        <Card className={className} color='background.lightest' width={1} p={2}>
            <Text color='text.darkest' fontSize={1} bold>{address}</Text>
            <Text color='text.darkest' fontSize={1} bold>{city}</Text>
            <Text color='text.darkest' fontSize={1} bold>{email}</Text>
            <Text color='text.darkest' fontSize={1} bold>{phoneNumber}</Text>
        </Card>
    );
}

DonorInformation.displayName = 'DonorInformation';

DonorInformation.propTypes = {
    className: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
};

DonorInformation.defaultProps = {
    className: '',
};

export default memo(DonorInformation);
