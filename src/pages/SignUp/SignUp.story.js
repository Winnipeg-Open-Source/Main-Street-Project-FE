import React from 'react';
import StorybookRouter from 'storybook/helpers/StorybookRouter';
import SignUp from './SignUp';

export const Default = () => (
    <StorybookRouter>
        <SignUp />
    </StorybookRouter>
);

export default {
    title: 'Pages|SignUp',
    component: SignUp,
};
