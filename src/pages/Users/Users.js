import React, { useEffect } from 'react';
import Page from 'components/Page';
import Input from 'components/Input';
import UsersList from 'components/UsersList';
import NewButton from 'containers/NewButton';
import useUsers from 'hooks/context/useUsers';

function Users () {
    const { isLoading, users, onLoadUsers } = useUsers();
    const disabled = isLoading || (users && users.length === 0);

    useEffect(() => {
        isLoading && onLoadUsers();
    }, []);

    return (
        <Page isLoading={isLoading} title='Users' renderAction={NewButton}>
            <Input id='search' disabled={disabled} placeholder='Search' mb={3} />
            <UsersList users={users} />
        </Page>
    );
}

Users.displayName = 'Users';

export default Users;
