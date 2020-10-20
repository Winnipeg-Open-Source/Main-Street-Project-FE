import React from 'react';
import StorybookRouter from 'storybook/helpers/StorybookRouter';
import ItemsContext from 'context/Items';
import ItemsPage from './Items';
import { mockItems } from 'tests/mocks/items';

export const Loading = () => (
    <StorybookRouter>
        <ItemsContext.Provider
            value={{ isLoading: true, onLoadItems: () => {} }}
        >
            <ItemsPage />
        </ItemsContext.Provider>
    </StorybookRouter>
);

export const NoItems = () => (
    <StorybookRouter>
        <ItemsContext.Provider value={{ isLoading: false }}>
            <ItemsPage />
        </ItemsContext.Provider>
    </StorybookRouter>
);

export const MultipleItems = () => (
    <StorybookRouter>
        <ItemsContext.Provider value={{ isLoading: false, items: mockItems }}>
            <ItemsPage />
        </ItemsContext.Provider>
    </StorybookRouter>
);

export default {
    title: 'Pages/Items',
    component: ItemsPage,
};
