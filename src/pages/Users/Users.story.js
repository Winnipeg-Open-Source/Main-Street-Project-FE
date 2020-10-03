import React from 'react';
import StorybookRouter from 'storybook/helpers/StorybookRouter';
import UsersContext from 'context/Users';
import Users from './Users';
import { mockUsers } from 'tests/mocks/users';

export const NoUsers = () => (
    <StorybookRouter>
        <UsersContext.Provider value={{ users: [] }}>
            <Users />
        </UsersContext.Provider>
    </StorybookRouter>
);

export const MultipleUsers = () => (
    <StorybookRouter>
        <UsersContext.Provider value={{ users: mockUsers }}>
            <Users />
        </UsersContext.Provider>
    </StorybookRouter>
);

export default {
    title: 'Pages/Users',
    component: Users,
};
