import { useContext } from 'react';
import UsersContext from 'context/Users';

function useUsers () {
    return useContext(UsersContext);
}

export default useUsers;
