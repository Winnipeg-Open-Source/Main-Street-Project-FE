import React from 'react';
import DonorsList from './DonorsList';

const singleDonor = [
    {
        name: 'Costco',
        lastDonationDate: '2019 December 20',
    },
];

const multipleDonors = [
    {
        name: 'Costco',
        lastDonationDate: '2019 December 20',
    },
    {
        name: 'Costco',
        lastDonationDate: '2019 December 20',
    },
];

export const NoDonors = () => <DonorsList />;

export const SingleDonor = () => <DonorsList donors={singleDonor} />;

export const MultipleDonors = () => <DonorsList donors={multipleDonors} />;

export default {
    title: 'DonorsList',
    component: DonorsList,
};
