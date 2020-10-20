import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import useEmployees from './useEmployees';
import EmployeesContext from 'context/Employees';

const customContext = {
    isLoading: false,
    employees: [],
};

const EmployeesContextWrapper = ({ children }) => (
    <EmployeesContext.Provider value={customContext}>
        {children}
    </EmployeesContext.Provider>
);

describe('useEmployees', () => {
    it('should return default context', () => {
        const { result } = renderHook(() => useEmployees());
        expect(result.current.isLoading).toBe(true);
        expect(result.current.employees).toStrictEqual([]);
    });

    it('should return set context', () => {
        const { result } = renderHook(() => useEmployees(), {
            wrapper: EmployeesContextWrapper,
        });
        expect(result.current).toBe(customContext);
    });
});
