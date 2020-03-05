import React from 'react';
import DonorCard from './DonorCard';

const props = {
    name: 'Costco',
    lastDonationDate: '2019 December 20',
};

export const HasNotDonated = () => <DonorCard name='Costco' />;

export const HasDonated = () => <DonorCard {...props} />;

export default {
    title: 'DonorCard',
    component: DonorCard,
};
