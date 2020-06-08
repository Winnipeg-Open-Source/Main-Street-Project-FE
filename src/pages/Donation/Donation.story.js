import React from 'react';
import StorybookRouter from 'storybook/helpers/StorybookRouter';
import DonationsContext from 'context/Donations';
import DonationPage from './Donation';
import { DONATION_PATH, getDonationPath } from 'constants/paths';
import { mockDonations } from 'tests/mocks/donations';

export const Loading = () => {
    const currentDonationPath = getDonationPath(1);

    return (
        <StorybookRouter route={DONATION_PATH} currentRoute={currentDonationPath}>
            <DonationsContext.Provider value={{ isLoading: true, donations: [] }}>
                <DonationPage />
            </DonationsContext.Provider>
        </StorybookRouter>
    );
};

export const Loaded = () => {
    const currentDonationPath = getDonationPath(1);

    return (
        <StorybookRouter route={DONATION_PATH} currentRoute={currentDonationPath}>
            <DonationsContext.Provider value={{ isLoading: false, donations: mockDonations }}>
                <DonationPage />
            </DonationsContext.Provider>
        </StorybookRouter>
    );
};

export const NotFound = () => {
    const currentDonationPath = getDonationPath(1);

    return (
        <StorybookRouter route={DONATION_PATH} currentRoute={currentDonationPath}>
            <DonationsContext.Provider value={{ isLoading: false, donations: [] }}>
                <DonationPage />
            </DonationsContext.Provider>
        </StorybookRouter>
    );
};

export default {
    title: 'Pages|Donation',
    component: DonationPage,
};
