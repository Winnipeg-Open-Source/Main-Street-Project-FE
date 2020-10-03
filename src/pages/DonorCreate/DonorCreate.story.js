import React from 'react';
import StorybookRouter from 'storybook/helpers/StorybookRouter';
import MockProviders from 'storybook/helpers/MockProviders';
import mockAxios from 'storybook/helpers/mockAxios';
import { noDonors } from 'storybook/mocks/donors';
import DonorCreate from './DonorCreate';
import { DONORS_API_PATH } from 'constants/api';

export const EmptyForm = () => {
    mockAxios.onGet(DONORS_API_PATH).reply(200, noDonors);

    return (
        <StorybookRouter>
            <MockProviders>
                <DonorCreate />
            </MockProviders>
        </StorybookRouter>
    );
};

export default {
    title: 'Pages/DonorCreate',
    component: DonorCreate,
};
