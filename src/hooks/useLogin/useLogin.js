import { useEffect } from 'react';
import useAuthentication from 'hooks/context/useAuthentication';
import useAxios from 'hooks/useAxios';
import usePreviousRoute from 'hooks/usePreviousRoute';
import useRoute from 'hooks/useRoute';
import { LOGIN_API_PATH } from 'constants/api';
import { LANDING_PATH } from 'constants/paths';

const request = {
    url: LOGIN_API_PATH,
    method: 'post',
};

let isAttempting = true;

function useLogin () {
    const { onAttemptLogin, onLogin, onLoggedIn, onLoginFailed } = useAuthentication();
    const { response, fetchData } = useAxios(request);
    const goToLandingPage = useRoute(LANDING_PATH);
    const goToPreviousRoute = usePreviousRoute();

    const handleLogin = (email, password) => {
        isAttempting = false;
        onLogin();
        fetchData({ email, password });
    };

    const handleLoginWithToken = () => {
        isAttempting = true;
        onAttemptLogin();
        fetchData();
    };

    useEffect(() => {
        if (!response.isLoading && !!response.data && !response.isError) {
            onLoggedIn(response.data);
            isAttempting ? goToPreviousRoute() : goToLandingPage();
        } else if (response.isError) {
            onLoginFailed();
        }
    }, [response]);

    return { response, handleLogin, handleLoginWithToken };
}

export default useLogin;
