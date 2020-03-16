import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import DonationCard from './DonationCard';

export const WithoutDonationDate = () => (
    <BrowserRouter>
        <DonationCard />
    </BrowserRouter>
);

export const WithDonationDate = () => (
    <BrowserRouter>
        <DonationCard donationDate='2020 Feb 02' />
    </BrowserRouter>
);

export default {
    title: 'DonationCard',
    component: DonationCard,
};
