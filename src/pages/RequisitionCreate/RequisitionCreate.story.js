import React from 'react';
import StorybookRouter from 'storybook/helpers/StorybookRouter';
import MockProviders from 'storybook/helpers/MockProviders';
import mockAxios from 'storybook/helpers/mockAxios';
import RequisitionCreate from './RequisitionCreate';
import { mockEmployees } from 'storybook/mocks/employees';
import { mockItems } from 'storybook/mocks/items';
import {
    EMPLOYEES_API_PATH,
    ITEMS_API_PATH,
} from 'constants/api';

export const Loading = () => {
    mockAxios.onGet(EMPLOYEES_API_PATH).reply(200, mockEmployees);
    mockAxios.onGet(ITEMS_API_PATH).reply(200, mockItems);

    return (
        <StorybookRouter>
            <MockProviders>
                <RequisitionCreate />
            </MockProviders>
        </StorybookRouter>
    );
};

export const Loaded = () => {
    return (
        <StorybookRouter>
            <MockProviders>
                <RequisitionCreate />
            </MockProviders>
        </StorybookRouter>
    );
};

export default {
    title: 'Pages|RequisitionCreate',
    component: RequisitionCreate,
};
