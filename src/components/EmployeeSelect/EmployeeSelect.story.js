import React from 'react';
import EmployeeSelect from './EmployeeSelect';
import { mockEmployees } from 'storybook/mocks/employees';

export const LoadingEmployees = () => <EmployeeSelect isLoading />;

export const Employees = () => <EmployeeSelect employees={mockEmployees} />;

export default {
    title: 'EmployeeSelect',
    component: EmployeeSelect,
};
