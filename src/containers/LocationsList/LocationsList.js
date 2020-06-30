import React from 'react';
import LocationsListComponent from 'components/LocationsList';
import useLocations from 'hooks/context/useLocations';

function LocationsList () {
    const { locations } = useLocations();

    return (
        <LocationsListComponent locations={locations} />
    );
}

LocationsList.displayName = 'LocationsList';

export default LocationsList;
