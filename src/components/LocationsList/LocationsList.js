import React, { memo } from 'react';
import PropTypes from 'prop-types';
import List from 'components/List';
import LocationCard from 'components/LocationCard';

function LocationsList ({ className, locations }) {
    return (
        <List className={className}>
            {locations && locations.map(location => (
                <LocationCard key={location.id} {...location} />
            ))}
        </List>
    );
}

LocationsList.displayName = 'LocationsList';

LocationsList.propTypes = {
    className: PropTypes.string,
    locations: PropTypes.array,
};

LocationsList.defaultProps = {
    className: '',
};

export default memo(LocationsList);
