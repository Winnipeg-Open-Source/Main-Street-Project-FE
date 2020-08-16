import React from 'react';
import StorybookRouter from 'storybook/helpers/StorybookRouter';
import Login from './Login';

export const Default = () => (
    <StorybookRouter>
        <Login />
    </StorybookRouter>
);

export default {
    title: 'Pages|Login',
    component: Login,
};
