import { useLocation } from 'react-router-dom';
import useRoute from 'hooks/useRoute';
import { LOGIN_PATH } from 'constants/paths';

function useRedirectToLogin () {
    const { pathname } = useLocation();
    return useRoute(LOGIN_PATH + `?referrer=${pathname}`);
}

export default useRedirectToLogin;
