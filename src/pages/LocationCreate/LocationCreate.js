import React from 'react';
import Page from 'components/Page';
import LocationForm from 'containers/LocationForm';

function LocationCreate () {
    return (
        <Page title='Create a Location'>
            <LocationForm />
        </Page>
    );
}

LocationCreate.displayName = 'LocationCreate';

export default LocationCreate;
