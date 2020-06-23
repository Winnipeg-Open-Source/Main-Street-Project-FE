import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import EmployeesContext from 'context/Employees';
import useLoadResources from 'hooks/useLoadResources';
import { EMPLOYEES_API_PATH } from 'constants/api';

function EmployeesProvider ({ children }) {
    const { isLoading, isError, data: employees, fetchData } = useLoadResources(EMPLOYEES_API_PATH);

    useEffect(() => {
        fetchData();
    }, []);

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
