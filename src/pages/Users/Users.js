import React, { useEffect } from 'react';
import Page from 'components/Page';
import Input from 'components/Input';
import UsersList from 'components/UsersList';
import NewButton from 'containers/NewButton';
import useSaveResource from 'hooks/useSaveResource';
import useUsers from 'hooks/context/useUsers';
import { USERS_API_PATH } from 'constants/api';

function Users () {
    const { isLoading, users, onUpdateUser, onLoadUsers } = useUsers();
    const { handleSave } = useSaveResource(
        USERS_API_PATH,
        null,
        onUpdateUser,
        'put'
    );

    const onAdminChange = (id, isAdmin) => handleSave({ id, isAdmin });
    const disabled = isLoading || (users && users.length === 0);

    useEffect(() => {
        isLoading && onLoadUsers();
    }, []);

    return (
        <Page isLoading={isLoading} title='Users' renderAction={NewButton}>
            <Input
                id='search'
                disabled={disabled}
                placeholder='Search'
                mb={3}
            />
            <UsersList
                isLoading={isLoading}
                users={users}
                onAdminChange={onAdminChange}
            />
        </Page>
    );
}

Users.displayName = 'Users';

export default Users;
