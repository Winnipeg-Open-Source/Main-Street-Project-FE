import React from 'react';
import RequisitionsList from './';
import { mockRequisitions } from 'tests/mocks/requisitions';

export const Loading = () => <RequisitionsList isLoading />;

export const Multiple = () => <RequisitionsList requisitions={mockRequisitions} />;

export default {
    title: 'RequisitionsList',
    component: RequisitionsList,
};
