import React from 'react';
import UsersList from './UsersList';
import { mockUsers } from 'tests/mocks/users';

export const NoUsers = () => <UsersList />;

export const ManyUsers = () => <UsersList users={mockUsers} />;

export default {
    title: 'UsersList',
    component: UsersList,
};
