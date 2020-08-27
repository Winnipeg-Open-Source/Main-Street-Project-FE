import React from 'react';
import Checkbox from './Checkbox';

export const NoLabel = () => <Checkbox />;

export const WithLabel = () => <Checkbox label='Label' />;

export default {
    title: 'Checkbox',
    component: Checkbox,
};
