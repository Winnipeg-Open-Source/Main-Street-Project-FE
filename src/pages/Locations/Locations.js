import React, { useEffect } from 'react';
import Page from 'components/Page';
import LocationsList from 'containers/LocationsList';
import NewButton from 'containers/NewButton';
import useLocations from 'hooks/context/useLocations';

function Locations () {
    const { isLoading, onLoadLocations } = useLocations();

    useEffect(() => {
        isLoading && onLoadLocations();
    }, []);

    return (
        <Page title='Locations' renderAction={NewButton}>
            <LocationsList />
        </Page>
    );
}

Locations.displayName = 'Locations';

export default Locations;
