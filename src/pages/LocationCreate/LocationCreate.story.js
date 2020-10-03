import React from 'react';
import StorybookRouter from 'storybook/helpers/StorybookRouter';
import MockProviders from 'storybook/helpers/MockProviders';
import mockAxios from 'storybook/helpers/mockAxios';
import LocationCreate from './LocationCreate';

export const EmptyForm = () => {
    return (
        <StorybookRouter>
            <MockProviders>
                <LocationCreate />
            </MockProviders>
        </StorybookRouter>
    );
};

export default {
    title: 'Pages/LocationCreate',
    component: LocationCreate,
};
