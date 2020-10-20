import React from 'react';
import Page from './Page';
import PageSkeleton from './PageSkeleton';
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
    return <Button size='small'>Render Action Button</Button>;
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

export const Loading = () => <PageSkeleton>Content</PageSkeleton>;

export default {
    title: 'Page',
    component: Page,
};
