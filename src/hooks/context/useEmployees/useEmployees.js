import { useContext } from 'react';
import EmployeesContext from 'context/Employees';

function useEmployees () {
    return useContext(EmployeesContext);
}

export default useEmployees;
