import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Card from 'components/Card';
import Skeleton from 'components/Skeleton';

function DonorCardSkeleton ({ className }) {
    return (
        <Card className={className}>
            <Skeleton width='20%' height={14} />
            <Skeleton width='40%' height={14} />
        </Card>
    );
}

DonorCardSkeleton.displayName = 'DonorCardSkeleton';

DonorCardSkeleton.propTypes = {
    className: PropTypes.string,
};

DonorCardSkeleton.defaultProps = {
    className: '',
};

export default memo(DonorCardSkeleton);
