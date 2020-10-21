import React from 'react';
import PropTypes from 'prop-types';
import LocationsContext from 'context/Locations';
import useResourcesReducer from 'hooks/reducers/useResourcesReducer';
import { LOCATIONS_API_PATH } from 'constants/api';

function Locations ({ children }) {
    const { isLoading, isError, data, onSave, onLoad } = useResourcesReducer(
        LOCATIONS_API_PATH
    );

    const props = {
        isLoading,
        isError,
        locations: data,
        onSaveLocation: onSave,
        onLoadLocations: onLoad,
    };

    return (
        <LocationsContext.Provider value={props}>
            {children}
        </LocationsContext.Provider>
    );
}

Locations.displayName = 'LocationsProvider';

Locations.propTypes = {
    children: PropTypes.node,
};

export default Locations;
