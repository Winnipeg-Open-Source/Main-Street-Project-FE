import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import DonorInformation from './DonorInformation';

function DonorInformationSkeleton ({ className }) {
    return (
        <DonorInformation
            className={className}
            address={<Skeleton width='80%' />}
            city={<Skeleton width='80%' />}
            email={<Skeleton width='80%' />}
            phoneNumber={<Skeleton width='80%' />}
        />
    );
}

DonorInformationSkeleton.displayName = 'DonorInformationSkeleton';

DonorInformationSkeleton.propTypes = {
    className: PropTypes.string,
};

DonorInformationSkeleton.defaultProps = {
    className: '',
};

export default memo(DonorInformationSkeleton);
