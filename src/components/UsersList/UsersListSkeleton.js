import React, { memo } from 'react';
import PropTypes from 'prop-types';
import List from 'components/List';
import UserCard from 'components/UserCard';

function UsersListSkeleton ({ className }) {
    return (
        <List className={className}>
            <UserCard isLoading />
            <UserCard isLoading />
            <UserCard isLoading />
        </List>
    );
}

UsersListSkeleton.displayName = 'UsersListSkeleton';

UsersListSkeleton.propTypes = {
    className: PropTypes.string,
};

UsersListSkeleton.defaultProps = {
    className: '',
};

export default memo(UsersListSkeleton);
