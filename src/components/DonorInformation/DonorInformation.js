import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Card from 'components/Card';
import { Text } from 'pcln-design-system';

function DonorInformation ({
    className,
    name,
    address,
    city,
    province,
    email,
    phoneNumber,
}) {
    const cityProvince = province ? `${city}, ${province}` : city;

    return (
        <Card className={className}>
            <Text color='text.darkest' fontSize={1} bold>
                {name}
            </Text>
            <Text color='text.light' fontSize={1}>
                {address}, {cityProvince}
            </Text>
            <Text color='text.light' fontSize={1}>
                {email}
            </Text>
            <Text color='text.light' fontSize={1}>
                {phoneNumber}
            </Text>
        </Card>
    );
}

DonorInformation.displayName = 'DonorInformation';

DonorInformation.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    province: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
};

DonorInformation.defaultProps = {
    className: '',
};

export default memo(DonorInformation);
