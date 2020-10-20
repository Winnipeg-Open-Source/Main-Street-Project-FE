import React, { useEffect } from 'react';
import Page from 'components/Page';
import Input from 'components/Input';
import LocationsList from 'containers/LocationsList';
import NewButton from 'containers/NewButton';
import useLocations from 'hooks/context/useLocations';

function Locations () {
    const { isLoading, locations, onLoadLocations } = useLocations();

    const disabled = isLoading || (locations && locations.length === 0);

    useEffect(() => {
        isLoading && onLoadLocations();
    }, []);

    return (
        <Page title='Locations' renderAction={NewButton}>
            <Input
                id='search'
                disabled={disabled}
                placeholder='Search'
                mb={3}
            />
            <LocationsList />
        </Page>
    );
}

Locations.displayName = 'Locations';

export default Locations;
