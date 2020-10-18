import React from 'react';
import { Document, ExitToApp, Gallery, Home, Loyalty, Map, ParentChildCircle, User } from 'pcln-icons';
import {
    LANDING_PATH,
    DONATIONS_PATH,
    DONORS_PATH,
    ITEMS_PATH,
    LOCATIONS_PATH,
    LOGOUT_PATH,
    REQUISITIONS_PATH,
    USERS_PATH,
} from 'constants/paths';

const routes = [
    {
        label: 'Home',
        path: LANDING_PATH,
        icon: <Home />,
    },
    {
        label: 'Users',
        path: USERS_PATH,
        icon: <User />,
        isAdmin: true,
    },
    {
        label: 'Donors',
        path: DONORS_PATH,
        icon: <ParentChildCircle />,
    },
    {
        label: 'Donations',
        path: DONATIONS_PATH,
        icon: <Loyalty />,
    },
    {
        label: 'Items',
        path: ITEMS_PATH,
        icon: <Gallery />,
    },
    {
        label: 'Locations',
        path: LOCATIONS_PATH,
        icon: <Map />,
    },
    {
        label: 'Requisitions',
        path: REQUISITIONS_PATH,
        icon: <Document />,
    },
    {
        label: 'Logout',
        path: LOGOUT_PATH,
        icon: <ExitToApp />,
    },
];

export default routes;
