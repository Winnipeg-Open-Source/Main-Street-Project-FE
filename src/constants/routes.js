import React from 'react';
import { Home, List, User } from 'pcln-icons';
import { LANDING_PATH, DONORS_PATH, PRODUCTS_PATH } from 'constants/paths';

const routes = [
    {
        label: 'Dashboard',
        path: LANDING_PATH,
        icon: <Home />,
    },
    {
        label: 'Products',
        path: PRODUCTS_PATH,
        icon: <List />,
    },
    {
        label: 'Donors',
        path: DONORS_PATH,
        icon: <User />,
    },
];

export default routes;
