import React from 'react';
import Page from './Page';
import { Button, Input } from 'pcln-design-system';

function Children () {
    return (
        <>
            <Input mb={2} />
            <Input />
        </>
    );
}

function RenderAction () {
    return (
        <Button>Render Action Button</Button>
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
    <Page title='Title' renderAction={RenderAction}>
        <Children />
    </Page>
);

export default {
    title: 'Page',
    component: Page,
};
