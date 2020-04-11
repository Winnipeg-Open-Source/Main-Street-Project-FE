import React from 'react';
import EmployeeSelect from './EmployeeSelect';

const employees = [
    {
        id: 1,
        name: 'John Smith',
    },
    {
        id: 2,
        name: 'Jane Doe',
    },
];

export const LoadingEmployees = () => <EmployeeSelect isLoading />;

export const Employees = () => <EmployeeSelect employees={employees} />;

export default {
    title: 'EmployeeSelect',
    component: EmployeeSelect,
};
