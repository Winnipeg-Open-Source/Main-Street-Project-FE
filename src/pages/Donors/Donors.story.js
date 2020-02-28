import React from 'react';
import DonorsPage from './Donors';

export const NoDonors = () => <DonorsPage />;

export const SingleDonor = () => <DonorsPage />;

export const MultipleDonors = () => <DonorsPage />;

export default {
    title: 'DonorsPage',
    component: DonorsPage,
};
