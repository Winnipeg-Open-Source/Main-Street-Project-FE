import React from 'react';
import DonationCard from './DonationCard';
import DonationCardSkeleton from './DonationCardSkeleton';

export const Loading = () => (
    <DonationCardSkeleton />
);

export const WithoutDonationDate = () => <DonationCard title='Donation Title' />;

export const WithDonationDate = () => (
    <DonationCard title='Donation Title' donationDate='2020 Feb 02' />
);

export default {
    title: 'DonationCard',
    component: DonationCard,
};
