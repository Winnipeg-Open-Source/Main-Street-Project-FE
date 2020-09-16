import React from 'react';
import { action } from '@storybook/addon-actions';
import StorybookRouter from 'storybook/helpers/StorybookRouter';
import Authentication from 'context/Authentication';
import Logout from './Logout';

export const Default = () => (
    <StorybookRouter>
        <Authentication.Provider value={{ onLogout: action('logout') }}>
            <Logout />
        </Authentication.Provider>
    </StorybookRouter>
);

export default {
    title: 'Pages|Logout',
    component: Logout,
};
