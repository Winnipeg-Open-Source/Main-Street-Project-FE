import React, { memo } from 'react';
import PropTypes from 'prop-types';
import List from 'components/List';
import LocationCard from 'components/LocationCard';

function LocationsListSkeleton ({ className }) {
    return (
        <List className={className}>
            <LocationCard isLoading />
            <LocationCard isLoading />
            <LocationCard isLoading />
        </List>
    );
}

LocationsListSkeleton.displayName = 'LocationsListSkeleton';

LocationsListSkeleton.propTypes = {
    className: PropTypes.string,
};

LocationsListSkeleton.defaultProps = {
    className: '',
};

export default memo(LocationsListSkeleton);
