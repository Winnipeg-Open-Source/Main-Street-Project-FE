import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'pcln-design-system';
import List from 'components/List';
import UserCard from 'components/UserCard';

function UsersList ({ className, users, onAdminChange }) {
    return (
        <List className={className}>
            {users && users.length > 0
                ? users.map(user => (
                    <UserCard
                        key={user.uid}
                        {...user}
                        onAdminChange={onAdminChange}
                    />
                ))
                : <Text textAlign='center'>No users yet...</Text>
            }
        </List>
    );
}

UsersList.displayName = 'UsersList';

UsersList.propTypes = {
    className: PropTypes.string,
    users: PropTypes.array,
    onAdminChange: PropTypes.func,
};

export default memo(UsersList);
