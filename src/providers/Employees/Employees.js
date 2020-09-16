import React from 'react';
import PropTypes from 'prop-types';
import EmployeesContext from 'context/Employees';
import useResourcesReducer from 'hooks/reducers/useResourcesReducer';
import { EMPLOYEES_API_PATH } from 'constants/api';

function EmployeesProvider ({ children }) {
    const { isLoading, isError, data, onSave, onLoad } = useResourcesReducer(EMPLOYEES_API_PATH);

    const props = {
        isLoading,
        isError,
        employees: data,
        onSaveEmployee: onSave,
        onLoadEmployees: onLoad,
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
