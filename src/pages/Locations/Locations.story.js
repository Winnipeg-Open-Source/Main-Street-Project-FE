import React from 'react';
import StorybookRouter from 'storybook/helpers/StorybookRouter';
import LocationsContext from 'context/Locations';
import LocationsPage from './Locations';
import { mockLocations } from 'tests/mocks/locations';

export const Loading = () => (
    <StorybookRouter>
        <LocationsContext.Provider value={{ isLoading: true }}>
            <LocationsPage />
        </LocationsContext.Provider>
    </StorybookRouter>
);

export const NoLocations = () => (
    <StorybookRouter>
        <LocationsContext.Provider value={{ isLoading: false }}>
            <LocationsPage />
        </LocationsContext.Provider>
    </StorybookRouter>
);

export const MultipleLocations = () => (
    <StorybookRouter>
        <LocationsContext.Provider value={{ isLoading: false, locations: mockLocations }}>
            <LocationsPage />
        </LocationsContext.Provider>
    </StorybookRouter>
);

export default {
    title: 'Pages|Locations',
    component: LocationsPage,
};
