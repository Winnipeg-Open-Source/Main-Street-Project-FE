import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'pcln-design-system';
import List from 'components/List';
import LocationCard from 'components/LocationCard';

function LocationsList ({ className, locations }) {
    return (
        <List className={className}>
            {locations && locations.length > 0 ? (
                locations.map((location) => (
                    <LocationCard key={location.id} {...location} />
                ))
            ) : (
                <Text textAlign='center'>No locations yet...</Text>
            )}
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
