import React from 'react';
import DonorsList from './DonorsList';

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
        name: 'Sobeys',
        lastDonationDate: '2019 December 21',
    },
];

export const NoDonors = () => <DonorsList />;

export const SingleDonor = () => <DonorsList donors={singleDonor} />;

export const MultipleDonors = () => <DonorsList donors={multipleDonors} />;

export default {
    title: 'DonorsList',
    component: DonorsList,
};
