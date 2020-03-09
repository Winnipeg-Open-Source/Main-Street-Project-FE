import React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { BrowserRouter } from 'react-router-dom';
import DonorsProvider from 'providers/Donors';
import DonorsPage from './Donors';
import { DONORS_API_PATH } from 'constants/api';

const mockAxios = new MockAdapter(axios, { delayResponse: 500 });

const noDonors = {
    isLoading: false,
    donors: [],
};

const singleDonor = {
    isLoading: false,
    donors: [
        {
            id: 1,
            name: 'Costco',
            lastDonationDate: '2019 December 20',
        },
    ]
};

const multipleDonors = {
    isLoading: false,
    donors: [
        {
            id: 1,
            name: 'Costco',
            lastDonationDate: '2019 December 20',
        },
        {
            id: 2,
            name: 'Costco',
            lastDonationDate: '2019 December 20',
        },
        {
            id: 3,
            name: 'Costco',
            lastDonationDate: '2019 December 20',
        },
    ],
};

export const NoDonors = () => {
    mockAxios.onGet(DONORS_API_PATH).reply(200, noDonors);

    return (
        <BrowserRouter>
            <DonorsProvider>
                <DonorsPage />
            </DonorsProvider>
        </BrowserRouter>
    );
};

export const SingleDonor = () => {
    mockAxios.onGet(DONORS_API_PATH).reply(200, singleDonor);

    return (
        <BrowserRouter>
            <DonorsProvider>
                <DonorsPage />
            </DonorsProvider>
        </BrowserRouter>
    );
};

export const MultipleDonors = () => {
    mockAxios.onGet(DONORS_API_PATH).reply(200, multipleDonors);

    return (
        <BrowserRouter>
            <DonorsProvider>
                <DonorsPage />
            </DonorsProvider>
        </BrowserRouter>
    );
};

export default {
    title: 'DonorsPage',
    component: DonorsPage,
};
