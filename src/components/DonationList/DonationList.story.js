import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import DonationList from './DonationList';

const props = {
    donations: [
        {
            id: 1,
            donationDate: '2020 Feb 02',
        },
        {
            id: 2,
            donationDate: '2020 Jan 30',
        },
    ],
};

export const WithoutDonations = () => <DonationList />;

export const WithDonations = () => (
    <BrowserRouter>
        <DonationList {...props} />
    </BrowserRouter>
);

export default {
    title: 'DonationList',
    component: DonationList,
};
