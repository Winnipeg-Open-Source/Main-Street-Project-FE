import React from 'react';
import DonationList from './DonationList';
import DonationListSkeleton from './DonationListSkeleton';

const props = {
    donations: [
        {
            id: 1,
            title: 'Donation from Costco',
            donationDate: '2020 Feb 02',
        },
        {
            id: 2,
            title: 'Donation from Walmart',
            donationDate: '2020 Jan 30',
        },
    ],
};

export const Loading = () => <DonationListSkeleton />;

export const WithoutDonations = () => <DonationList />;

export const WithDonations = () => <DonationList {...props} />;

export default {
    title: 'DonationList',
    component: DonationList,
};
