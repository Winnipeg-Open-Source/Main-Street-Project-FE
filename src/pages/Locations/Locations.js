import React from 'react';
import Page from 'components/Page';
import LocationsList from 'containers/LocationsList';
import NewButton from 'containers/NewButton';

function Locations () {
    return (
        <Page title='Locations' renderAction={NewButton}>
            <LocationsList />
        </Page>
    );
}

Locations.displayName = 'Locations';

export default Locations;
