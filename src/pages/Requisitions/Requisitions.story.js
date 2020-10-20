import React from 'react';
import StorybookRouter from 'storybook/helpers/StorybookRouter';
import RequisitionsContext from 'context/Requisitions';
import Requisitions from './Requisitions';
import { mockRequisitions } from 'tests/mocks/requisitions';

export const Loading = () => (
    <StorybookRouter>
        <RequisitionsContext.Provider
            value={{ isLoading: true, onLoadRequisitions: () => {} }}
        >
            <Requisitions />
        </RequisitionsContext.Provider>
    </StorybookRouter>
);

export const NoRequisitions = () => (
    <StorybookRouter>
        <RequisitionsContext.Provider value={{ isLoading: false }}>
            <Requisitions />
        </RequisitionsContext.Provider>
    </StorybookRouter>
);

export const MultipleRequisitions = () => (
    <StorybookRouter>
        <RequisitionsContext.Provider
            value={{ isLoading: false, requisitions: mockRequisitions }}
        >
            <Requisitions isLoading />
        </RequisitionsContext.Provider>
    </StorybookRouter>
);

export default {
    title: 'Pages/Requisitions',
    component: Requisitions,
};
