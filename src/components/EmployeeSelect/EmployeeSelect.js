import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Select from 'components/Select';

function EmployeeSelect ({
    className,
    isLoading,
    employees,
    value,
    onChange
}) {
    const placeholder = isLoading ? 'Loading...' : 'Employee / Volunteer';
    
    return (
        <Select
            id='employee'
            className={className}
            disabled={isLoading}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            data-testid='employee-select'
        >
            {employees && employees.map(employee => (
                <option value={employee.id}>
                    {employee.name}
                </option>
            ))}
        </Select>
    );
}

EmployeeSelect.displayName = 'EmployeeSelect';

EmployeeSelect.propTypes = {
    className: PropTypes.string,
    isLoading: PropTypes.bool,
    employees: PropTypes.shape({
        id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
        name: PropTypes.string,
    }),
    value: PropTypes.string,
    onChange: PropTypes.func,
};

EmployeeSelect.defaultProps = {
    className: '',
};

export default memo(EmployeeSelect);
