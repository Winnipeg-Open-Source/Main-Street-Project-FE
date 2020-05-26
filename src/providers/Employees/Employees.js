import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import EmployeesContext from 'context/Employees';
import useLoadEmployees from 'hooks/useLoadEmployees';

function EmployeesProvider ({ children }) {
    const { isLoading, isError, employees, fetchData } = useLoadEmployees();

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const props = {
        isLoading,
        isError,
        employees,
    };

    return (
        <EmployeesContext.Provider value={props}>
            {children}
        </EmployeesContext.Provider>
    );
}

EmployeesProvider.displayName = 'EmployeesProvider';

EmployeesProvider.propTypes = {
    children: PropTypes.node,
};

export default EmployeesProvider;
