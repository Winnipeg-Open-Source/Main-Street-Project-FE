import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import DonorsProvider from 'providers/Donors';
import DonorsPage from './Donors';

const singleDonor = [
    {
        id: 1,
        name: 'Costco',
        lastDonationDate: '2019 December 20',
    },
];

const multipleDonors = [
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
];

export const NoDonors = () => (
    <BrowserRouter>
        <DonorsPage />
    </BrowserRouter>
);

export const SingleDonor = () => (
    <BrowserRouter>
        <DonorsProvider donors={singleDonor}>
            <DonorsPage />
        </DonorsProvider>
    </BrowserRouter>
);

export const MultipleDonors = () => (
    <BrowserRouter>
        <DonorsProvider donors={multipleDonors}>
            <DonorsPage />
        </DonorsProvider>
    </BrowserRouter>
);

export default {
    title: 'DonorsPage',
    component: DonorsPage,
};
