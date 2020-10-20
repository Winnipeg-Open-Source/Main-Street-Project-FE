import React from 'react';
import DonorInformation from './DonorInformation';
import DonorInformationSkeleton from './DonorInformationSkeleton';

const props = {
    name: 'Costco',
    address: '2600 - 360 Main Street',
    city: 'Winnipeg',
    province: 'MB',
    email: 'test@gmail.com',
    phoneNumber: '204-555-5555',
};

export const Loading = () => <DonorInformationSkeleton />;

export const WithoutProvince = () => (
    <DonorInformation {...props} province={null} />
);

export const WithInfo = () => <DonorInformation {...props} />;

export default {
    title: 'DonorInformation',
    component: DonorInformation,
};
