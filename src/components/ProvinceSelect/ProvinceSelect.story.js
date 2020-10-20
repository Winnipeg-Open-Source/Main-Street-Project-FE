import React from 'react';
import { action } from '@storybook/addon-actions';
import ProvinceSelect from './ProvinceSelect';

export const Default = () => (
    <ProvinceSelect onChange={action('Option selected')} />
);

export default {
    title: 'ProvinceSelect',
    component: ProvinceSelect,
};
