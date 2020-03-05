import React from 'react';
import { action } from '@storybook/addon-actions';
import Page from './Page';
import { Input } from 'pcln-design-system';

function Children () {
    return (
        <>
            <Input mb={2} />
            <Input />
        </>
    );
}

export const WithoutTitle = () => (
    <Page>
        <Children />
    </Page>
);

export const WithTitle = () => (
    <Page title='Title'>
        <Children />
    </Page>
);

export const WithActionButton = () => (
    <Page title='Title' actionText='Button Text' onActionClick={action('action clicked')}>
        <Children />
    </Page>
);

export default {
    title: 'Page',
    component: Page,
};
