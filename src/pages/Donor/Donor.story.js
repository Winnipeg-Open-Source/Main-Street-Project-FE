import React from 'react';
import StorybookRouter from 'storybook/helpers/StorybookRouter';
import DonorsProvider from 'providers/Donors';
import DonorPage from './Donor';
import { DONORS_API_PATH } from 'constants/api';
import { DONOR_PATH, getDonorPath } from 'constants/paths';
import { noDonors, singleDonor } from 'storybook/mocks/donors';
import mockAxios from 'storybook/helpers/mockAxios';

export const NoDonors = () => {
    mockAxios.onGet(DONORS_API_PATH).reply(200, noDonors);

    const currentDonorPath = getDonorPath(1);

    return (
        <StorybookRouter route={DONOR_PATH} currentRoute={currentDonorPath}>
            <DonorsProvider>
                <DonorPage />
            </DonorsProvider>
        </StorybookRouter>
    );
};

export const SingleDonor = () => {
    mockAxios.onGet(DONORS_API_PATH).reply(200, singleDonor);

    const currentDonorPath = getDonorPath(1);

    return (
        <StorybookRouter route={DONOR_PATH} currentRoute={currentDonorPath}>
            <DonorsProvider>
                <DonorPage />
            </DonorsProvider>
        </StorybookRouter>
    );
};

export default {
    title: 'Pages|DonorPage',
    components: DonorPage,
};
