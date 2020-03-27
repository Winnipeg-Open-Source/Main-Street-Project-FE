import React from 'react';
import StorybookRouter from 'storybook/helpers/StorybookRouter';
import DonorCreate from './DonorCreate';

export const EmptyForm = () => (
    <StorybookRouter>
        <DonorCreate />
    </StorybookRouter>
);

export default {
    title: 'Pages|DonorCreate',
    component: DonorCreate,
};
