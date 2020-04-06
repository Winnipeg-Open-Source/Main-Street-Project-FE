import React, { memo } from 'react';
import PropTypes from 'prop-types';
import List from 'components/List';
import DonorCard from 'components/DonorCard';

function DonorCardSkeleton ({ className }) {
    return (
        <List className={className}>
            <DonorCard isLoading />
            <DonorCard isLoading />
            <DonorCard isLoading />
        </List>
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
