import React from 'react';
import StorybookRouter from 'storybook/helpers/StorybookRouter';
import DonorsContext from 'context/Donors';
import DonorPage from './Donor';
import { DONOR_PATH, getDonorPath } from 'constants/paths';
import { noDonors, singleDonor } from 'storybook/mocks/donors';

export const Loading = () => {
    const currentDonorPath = getDonorPath(1);

    return (
        <StorybookRouter route={DONOR_PATH} currentRoute={currentDonorPath}>
            <DonorsContext.Provider value={{ isLoading: true }}>
                <DonorPage />
            </DonorsContext.Provider>
        </StorybookRouter>
    );
};

export const NotFound = () => {
    const currentDonorPath = getDonorPath(1);

    return (
        <StorybookRouter route={DONOR_PATH} currentRoute={currentDonorPath}>
            <DonorsContext.Provider value={noDonors}>
                <DonorPage />
            </DonorsContext.Provider>
        </StorybookRouter>
    );
};

export const Found = () => {
    const currentDonorPath = getDonorPath(1);

    return (
        <StorybookRouter route={DONOR_PATH} currentRoute={currentDonorPath}>
            <DonorsContext.Provider value={singleDonor}>
                <DonorPage />
            </DonorsContext.Provider>
        </StorybookRouter>
    );
};

export default {
    title: 'Pages/DonorPage',
    components: DonorPage,
};
