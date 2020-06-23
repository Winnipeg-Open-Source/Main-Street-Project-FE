import React from 'react';
import PropTypes from 'prop-types';
import LocationsContext from 'context/Locations';

function Locations ({ children }) {
    return (
        <LocationsContext.Provider>
            {children}
        </LocationsContext.Provider>
    );
}

Locations.displayName = 'LocationsProvider';

Locations.propTypes = {
    children: PropTypes.node,
};

export default Locations;
