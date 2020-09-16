import { useEffect } from 'react';
import useAuthentication from 'hooks/context/useAuthentication';
import useAxios from 'hooks/useAxios';
import useRoute from 'hooks/useRoute';
import { LOGOUT_API_PATH } from 'constants/api';
import { LOGIN_PATH } from 'constants/paths';

const request = {
    url: LOGOUT_API_PATH,
    method: 'post',
};

function useLogout () {
    const { onLogout } = useAuthentication();
    const { response, fetchData } = useAxios(request);
    const goToLandingPage = useRoute(LOGIN_PATH);

    const handleLogout = () => {
        fetchData();
    };

    useEffect(() => {
        if (!response.isLoading && !!response.data) {
            onLogout();
            goToLandingPage();
        }
    }, [response]);

    return { handleLogout };
}

export default useLogout;
