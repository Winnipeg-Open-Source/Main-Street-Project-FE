import React from 'react';
import StorybookRouter from 'storybook/helpers/StorybookRouter';
import MockProviders from 'storybook/helpers/MockProviders';
import mockAxios from 'storybook/helpers/mockAxios';
import DonationCreate from './DonationCreate';
import { multipleDonors } from 'storybook/mocks/donors';
import { mockItems } from 'storybook/mocks/items';
import { DONORS_API_PATH, ITEMS_API_PATH } from 'constants/api';

export const EmptyForm = () => {
    mockAxios.onGet(DONORS_API_PATH).reply(200, multipleDonors.donors);
    mockAxios.onGet(ITEMS_API_PATH).reply(200, mockItems);

    return (
        <StorybookRouter>
            <MockProviders>
                <DonationCreate />
            </MockProviders>
        </StorybookRouter>
    );
};

export default {
    title: 'Pages/DonationCreate',
    component: DonationCreate,
};
