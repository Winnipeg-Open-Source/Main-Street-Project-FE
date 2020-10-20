import { useEffect } from 'react';
import useAuthentication from 'hooks/context/useAuthentication';
import useAxios from 'hooks/useAxios';
import { LOGIN_API_PATH } from 'constants/api';

const request = {
    url: LOGIN_API_PATH,
    method: 'post',
};

function useLogin () {
    const {
        onAttemptLogin,
        onLogin,
        onLoggedIn,
        onLoginFailed,
    } = useAuthentication();
    const { response, fetchData } = useAxios(request);
    const { isLoading, isError, data } = response;

    const handleLogin = (email, password) => {
        onLogin();
        fetchData({ email, password });
    };

    const handleLoginWithToken = () => {
        onAttemptLogin();
        fetchData();
    };

    useEffect(() => {
        if (!isLoading && !isError) {
            onLoggedIn(response.data);
        } else if (isError) {
            onLoginFailed();
        }
    }, [isLoading, isError, data]);

    return { response, handleLogin, handleLoginWithToken };
}

export default useLogin;
