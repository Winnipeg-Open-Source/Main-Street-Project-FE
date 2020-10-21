import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Select from 'components/Select';

function UserSelect ({
    className,
    isLoading,
    placeholder,
    users,
    value,
    onChange,
}) {
    const loadingPlaceholder = isLoading ? 'Loading...' : placeholder;

    return (
        <Select
            id={placeholder}
            className={className}
            disabled={isLoading}
            placeholder={loadingPlaceholder}
            value={value}
            onChange={onChange}
            data-testid='employee-select'
        >
            {users &&
                users.map((user) => (
                    <option key={user.id} value={user.id}>
                        {user.name}
                    </option>
                ))}
        </Select>
    );
}

UserSelect.displayName = 'UserSelect';

UserSelect.propTypes = {
    className: PropTypes.string,
    isLoading: PropTypes.bool,
    placeholder: PropTypes.string,
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            name: PropTypes.string,
        })
    ),
    value: PropTypes.string,
    onChange: PropTypes.func,
};

UserSelect.defaultProps = {
    className: '',
};

export default memo(UserSelect);
