import React from 'react';
import UserCard from './UserCard';

export const NotAdmin = () => <UserCard email='elon@musk.com' />;

export const IsAdmin = () => <UserCard isAdmin email='elon@musk.com' />;

export default {
    title: 'UserCard',
    component: UserCard,
};
