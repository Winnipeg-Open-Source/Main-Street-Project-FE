import React from 'react';
import DonorCard from './DonorCard';
import DonorCardSkeleton from './DonorCardSkeleton';

const props = {
    name: 'Costco',
    lastDonationDate: '2019 December 20',
};

export const Loading = () => <DonorCardSkeleton />;

export const HasNotDonated = () => <DonorCard name='Costco' />;

export const HasDonated = () => <DonorCard {...props} />;

export default {
    title: 'DonorCard',
    component: DonorCard,
};
