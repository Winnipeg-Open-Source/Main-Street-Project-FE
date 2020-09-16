import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Card from 'components/Card';
import { Text } from 'pcln-design-system';

function DonorInformation ({ className, address, city, province, email, phoneNumber }) {
    const cityProvince = province ? `${city}, ${province}` : city;
    
    return (
        <Card className={className}>
            <Text color='text.darkest' fontSize={1} bold>{address}</Text>
            <Text color='text.darkest' fontSize={1} bold>{cityProvince}</Text>
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
    province: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
};

DonorInformation.defaultProps = {
    className: '',
};

export default memo(DonorInformation);
