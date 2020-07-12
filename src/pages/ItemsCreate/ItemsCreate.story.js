import React from 'react';
import StorybookRouter from 'storybook/helpers/StorybookRouter';
import ItemsContext from 'context/Items';
import LocationsContext from 'context/Locations';
import ItemsCreate from './ItemsCreate';
import { mockItems } from 'tests/mocks/items';
import { mockLocations } from 'tests/mocks/locations';

export const Loading = () => {
    return (
        <StorybookRouter>
            <ItemsContext.Provider value={{ isLoading: true }}>
                <LocationsContext.Provider value={{ isLoading: true }}>
                    <ItemsCreate />
                </LocationsContext.Provider>
            </ItemsContext.Provider>
        </StorybookRouter>
    );
};

export const EmptyForm = () => {
    return (
        <StorybookRouter>
            <ItemsContext.Provider value={{ isLoading: false, items: mockItems }}>
                <LocationsContext.Provider value={{ isLoading: false, locations: mockLocations }}>
                    <ItemsCreate />
                </LocationsContext.Provider>
            </ItemsContext.Provider>
        </StorybookRouter>
    );
};

export default {
    title: 'Pages|ItemsCreate',
    component: ItemsCreate,
};
