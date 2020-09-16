import React from 'react';
import LocationsListComponent from 'components/LocationsList';
import useLocations from 'hooks/context/useLocations';

function LocationsList () {
    const { isLoading, locations } = useLocations();

    return (
        <LocationsListComponent isLoading={isLoading} locations={locations} />
    );
}

LocationsList.displayName = 'LocationsList';

export default LocationsList;
