import React from 'react';
import RequisitionCard from './';
import { mockRequisition } from 'tests/mocks/requisitions';

export const Loading = () => <RequisitionCard isLoading />;

export const Requisition = () => <RequisitionCard {...mockRequisition} />;

export default {
    title: 'RequisitionCard',
    component: RequisitionCard,
};
