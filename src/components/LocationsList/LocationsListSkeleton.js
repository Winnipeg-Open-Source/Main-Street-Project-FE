import React, { memo } from 'react';
import PropTypes from 'prop-types';
import List from 'components/List';
import LocationCard from 'components/LocationCard';

function LocationListSkeleton ({ className }) {
    return (
        <List className={className}>
            <LocationCard isLoading />
            <LocationCard isLoading />
            <LocationCard isLoading />
        </List>
    );
}

LocationListSkeleton.displayName = 'LocationListSkeleton';

LocationListSkeleton.propTypes = {
    className: PropTypes.string,
};

LocationListSkeleton.defaultProps = {
    className: '',
};

export default memo(LocationListSkeleton);
