import React from 'react';
import PropTypes from 'prop-types';
import UsersContext from 'context/Users';
import useResourcesReducer from 'hooks/reducers/useResourcesReducer';
import { USERS_API_PATH } from 'constants/api';

function UsersProvider ({ children }) {
    const {
        isLoading,
        isError,
        data,
        onSave,
        onUpdate,
        onLoad,
    } = useResourcesReducer(USERS_API_PATH);

    const props = {
        isLoading,
        isError,
        users: data,
        onSaveUser: onSave,
        onUpdateUser: onUpdate,
        onLoadUsers: onLoad,
    };

    return (
        <UsersContext.Provider value={props}>{children}</UsersContext.Provider>
    );
}

UsersProvider.displayName = 'UsersProvider';

UsersProvider.propTypes = {
    children: PropTypes.node,
};

export default UsersProvider;
