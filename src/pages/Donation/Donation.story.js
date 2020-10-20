import React from 'react';
import StorybookRouter from 'storybook/helpers/StorybookRouter';
import DonationsContext from 'context/Donations';
import DonorsContext from 'context/Donors';
import DonationPage from './Donation';
import { DONATION_PATH, getDonationPath } from 'constants/paths';
import { mockDonations } from 'tests/mocks/donations';
import { mockDonors } from 'tests/mocks/donors';

export const Loading = () => {
    const currentDonationPath = getDonationPath(1);

    return (
        <StorybookRouter
            route={DONATION_PATH}
            currentRoute={currentDonationPath}
        >
            <DonationsContext.Provider
                value={{
                    isLoading: true,
                    donations: [],
                    onLoadDonations: () => {},
                }}
            >
                <DonorsContext.Provider
                    value={{
                        isLoading: true,
                        donors: [],
                        onLoadDonors: () => {},
                    }}
                >
                    <DonationPage />
                </DonorsContext.Provider>
            </DonationsContext.Provider>
        </StorybookRouter>
    );
};

export const Loaded = () => {
    const currentDonationPath = getDonationPath(1);

    return (
        <StorybookRouter
            route={DONATION_PATH}
            currentRoute={currentDonationPath}
        >
            <DonationsContext.Provider
                value={{ isLoading: false, donations: mockDonations }}
            >
                <DonorsContext.Provider
                    value={{ isLoading: false, donors: mockDonors }}
                >
                    <DonationPage />
                </DonorsContext.Provider>
            </DonationsContext.Provider>
        </StorybookRouter>
    );
};

export const NotFound = () => {
    const currentDonationPath = getDonationPath(1);

    return (
        <StorybookRouter
            route={DONATION_PATH}
            currentRoute={currentDonationPath}
        >
            <DonationsContext.Provider
                value={{ isLoading: false, donations: [] }}
            >
                <DonorsContext.Provider
                    value={{ isLoading: false, donors: [] }}
                >
                    <DonationPage />
                </DonorsContext.Provider>
            </DonationsContext.Provider>
        </StorybookRouter>
    );
};

export default {
    title: 'Pages/Donation',
    component: DonationPage,
};
