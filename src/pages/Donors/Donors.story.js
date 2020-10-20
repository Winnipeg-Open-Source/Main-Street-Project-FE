import React from 'react';
import StorybookRouter from 'storybook/helpers/StorybookRouter';
import DonorsContext from 'context/Donors';
import DonorsPage from './Donors';
import { noDonors, singleDonor, multipleDonors } from 'storybook/mocks/donors';

export const Loading = () => (
    <StorybookRouter>
        <DonorsContext.Provider
            value={{ isLoading: true, onLoadDonors: () => {} }}
        >
            <DonorsPage />
        </DonorsContext.Provider>
    </StorybookRouter>
);

export const NoDonors = () => (
    <StorybookRouter>
        <DonorsContext.Provider value={noDonors}>
            <DonorsPage />
        </DonorsContext.Provider>
    </StorybookRouter>
);

export const SingleDonor = () => (
    <StorybookRouter>
        <DonorsContext.Provider value={singleDonor}>
            <DonorsPage />
        </DonorsContext.Provider>
    </StorybookRouter>
);

export const MultipleDonors = () => (
    <StorybookRouter>
        <DonorsContext.Provider value={multipleDonors}>
            <DonorsPage />
        </DonorsContext.Provider>
    </StorybookRouter>
);

export default {
    title: 'Pages/DonorsPage',
    component: DonorsPage,
};
