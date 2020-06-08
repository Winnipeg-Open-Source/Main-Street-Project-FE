import React from 'react';
import StorybookRouter from 'storybook/helpers/StorybookRouter';
import DonationsContext from 'context/Donations';
import DonationsPage from './Donations';
import { mockDonations } from 'tests/mocks/donations';

export const Loading = () => (
    <StorybookRouter>
        <DonationsContext.Provider value={{ isLoading: true }}>
            <DonationsPage />
        </DonationsContext.Provider>
    </StorybookRouter>
);

export const NoDonations = () => (
    <StorybookRouter>
        <DonationsContext.Provider value={{ isLoading: false }}>
            <DonationsPage />
        </DonationsContext.Provider>
    </StorybookRouter>
);

export const MultipleDonations = () => (
    <StorybookRouter>
        <DonationsContext.Provider value={{ isLoading: false, donations: mockDonations }}>
            <DonationsPage />
        </DonationsContext.Provider>
    </StorybookRouter>
);

export default {
    title: 'Pages|Donations',
    components: DonationsPage,
};
