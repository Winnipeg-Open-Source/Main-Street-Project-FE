import React from 'react';
import DonationInformation from './DonationInformation';
import DonationInformationSkeleton from './DonationInformationSkeleton';

export const Loading = () => <DonationInformationSkeleton />;

export const Loaded = () => (
    <DonationInformation
        title='Donation Title'
        description='Donation Description'
        donationDate='2020 December 20'
        notes='Additional Donation Notes'
    />
);

export default {
    title: 'DonationInformation',
    component: DonationInformation,
};
