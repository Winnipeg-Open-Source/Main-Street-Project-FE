import React from 'react';
import LocationsList from 'components/LocationsList';
import { mockLocations } from 'tests/mocks/locations';

export const Locations = () => <LocationsList locations={mockLocations} />

export default {
    title: 'LocationsList',
    component: LocationsList,
};
