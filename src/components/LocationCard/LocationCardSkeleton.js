import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Card from 'components/Card';
import Skeleton from 'components/Skeleton';

function LocationCardSkeleton ({ className }) {
    return (
        <Card className={className}>
            <Skeleton width='30%' />
            <Skeleton width='75%' />
            <Skeleton width='75%' />
            <Skeleton width='75%' />
        </Card>
    );
}

LocationCardSkeleton.displayName = 'LocationCardSkeleton';

LocationCardSkeleton.propTypes = {
    className: PropTypes.string,
};

LocationCardSkeleton.defaultProps = {
    className: '',
};

export default memo(LocationCardSkeleton);
