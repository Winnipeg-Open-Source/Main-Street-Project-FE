import React from 'react';
import UsersList from './UsersList';
import UsersListSkeleton from './UsersListSkeleton';
import { mockUsers } from 'tests/mocks/users';

export const Loading = () => <UsersListSkeleton />;

export const NoUsers = () => <UsersList />;

export const ManyUsers = () => <UsersList users={mockUsers} />;

export default {
    title: 'UsersList',
    component: UsersList,
};
