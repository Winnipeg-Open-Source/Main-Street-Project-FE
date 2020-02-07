import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Home } from 'pcln-icons';
import Link from 'components/Link';

export const Default = () => (
    <BrowserRouter>
        <Link>Link Text</Link>
    </BrowserRouter>
);
export const WithIcon = () => (
    <BrowserRouter>
        <Link icon={<Home />}>Link Text</Link>
    </BrowserRouter>
);

export default {
    title: 'Link',
    component: Link,
};
