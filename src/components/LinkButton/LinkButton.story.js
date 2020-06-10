import React from 'react';
import StorybookRouter from 'storybook/helpers/StorybookRouter';
import LinkButton from './LinkButton';

export const Default = () => (
    <StorybookRouter>
        <LinkButton title='Title' path='/path/1' />
    </StorybookRouter>
);

export default {
    title: 'LinkButton',
    component: LinkButton,
};
