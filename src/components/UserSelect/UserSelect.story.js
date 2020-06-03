import React from 'react';
import UserSelect from './UserSelect';
import { mockEmployees } from 'storybook/mocks/employees';

export const LoadingUsers = () => <UserSelect isLoading />;

export const Users = () => <UserSelect users={mockEmployees} />;

export default {
    title: 'UserSelect',
    component: UserSelect,
};
