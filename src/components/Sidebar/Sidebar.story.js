import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './Sidebar';
import routes from 'constants/routes';
import { LANDING_PATH } from '../../constants/paths';

export const IsAdmin = () => (
    <BrowserRouter>
        <Sidebar isAdmin currentPathname={LANDING_PATH} routes={routes} />
    </BrowserRouter>
);

export const Expanded = () => (
    <BrowserRouter>
        <Sidebar currentPathname={LANDING_PATH} routes={routes} />
    </BrowserRouter>
);

export const Collapsed = () => (
    <BrowserRouter>
        <Sidebar isCollapsed currentPathname={LANDING_PATH} routes={routes} />
    </BrowserRouter>
);

export default {
    title: 'Sidebar',
    component: Sidebar,
};
