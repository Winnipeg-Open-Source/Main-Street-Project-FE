import React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import StorybookRouter from 'storybook/helpers/StorybookRouter';
import DonorsProvider from 'providers/Donors';
import DonorsPage from './Donors';
import { DONORS_API_PATH } from 'constants/api';
import { noDonors, singleDonor, multipleDonors } from 'storybook/mocks/donors';

const mockAxios = new MockAdapter(axios, { delayResponse: 500 });

export const NoDonors = () => {
    mockAxios.onGet(DONORS_API_PATH).reply(200, noDonors);

    return (
        <StorybookRouter>
            <DonorsProvider>
                <DonorsPage />
            </DonorsProvider>
        </StorybookRouter>
    );
};

export const SingleDonor = () => {
    mockAxios.onGet(DONORS_API_PATH).reply(200, singleDonor);

    return (
        <StorybookRouter>
            <DonorsProvider>
                <DonorsPage />
            </DonorsProvider>
        </StorybookRouter>
    );
};

export const MultipleDonors = () => {
    mockAxios.onGet(DONORS_API_PATH).reply(200, multipleDonors);

    return (
        <StorybookRouter>
            <DonorsProvider>
                <DonorsPage />
            </DonorsProvider>
        </StorybookRouter>
    );
};

export default {
    title: 'Pages|DonorsPage',
    component: DonorsPage,
};
