import React from 'react';
import { Home, List, User, Whirlpool } from 'pcln-icons';
import {
    LANDING_PATH,
    DONORS_PATH,
    REQUISITIONS_PATH,
} from 'constants/paths';

const routes = [
    {
        label: 'Dashboard',
        path: LANDING_PATH,
        icon: <Home />,
    },
    {
        label: 'Products',
        path: '/',
        icon: <List />,
    },
    {
        label: 'Donors',
        path: DONORS_PATH,
        icon: <User />,
    },
    {
        label: 'Requisitions',
        path: REQUISITIONS_PATH,
        icon: <Whirlpool />,
    },
];

export default routes;
