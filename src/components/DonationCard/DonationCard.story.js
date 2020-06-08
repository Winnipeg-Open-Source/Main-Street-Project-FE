import React from 'react';
import DonationCard from './DonationCard';

export const WithoutDonationDate = () => <DonationCard title='Donation Title' />;

export const WithDonationDate = () => (
    <DonationCard title='Donation Title' donationDate='2020 Feb 02' />
);

export default {
    title: 'DonationCard',
    component: DonationCard,
};
