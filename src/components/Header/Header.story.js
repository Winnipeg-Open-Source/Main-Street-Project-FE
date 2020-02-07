import React from 'react';
import { action } from '@storybook/addon-actions';
import Header from './Header';

export const Default = () => <Header onMenuClick={action('Menu Clicked')} />;

export default {
    title: 'Header',
    component: Header,
};
