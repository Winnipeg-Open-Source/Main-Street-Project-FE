import { useContext } from 'react';
import AuthenticationContext from 'context/Authentication';

function useAuthentication () {
    return useContext(AuthenticationContext);
}

export default useAuthentication;
