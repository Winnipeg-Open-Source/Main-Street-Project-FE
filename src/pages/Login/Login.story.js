import React from 'react';
import { action } from '@storybook/addon-actions';
import StorybookRouter from 'storybook/helpers/StorybookRouter';
import Authentication from 'context/Authentication';
import Login from './Login';

const props = {
    onAttemptLogin: action('Attempt Login'),
    onLoggedIn: action('Logged in'),
};

export const RequiresEmailAndPassword = () => (
    <StorybookRouter>
        <Authentication.Provider value={{ ...props }}>
            <Login />
        </Authentication.Provider>
    </StorybookRouter>
);

export const AttemptingLogin = () => (
    <StorybookRouter>
        <Authentication.Provider value={{ ...props, isAttemptingLogin: true }}>
            <Login />
        </Authentication.Provider>
    </StorybookRouter>
);

export const LoggingIn = () => (
    <StorybookRouter>
        <Authentication.Provider value={{ ...props, isLoggingIn: true }}>
            <Login />
        </Authentication.Provider>
    </StorybookRouter>
);

export default {
    title: 'Pages/Login',
    component: Login,
};
