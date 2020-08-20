import { useEffect } from 'react';
import useAuthentication from 'hooks/context/useAuthentication';
import useAxios from 'hooks/useAxios';
import useRoute from 'hooks/useRoute';
import { LOGIN_API_PATH } from 'constants/api';
import { LANDING_PATH } from 'constants/paths';

const request = {
    url: LOGIN_API_PATH,
    method: 'post',
};

function useLogin () {
    const { onLogin } = useAuthentication();
    const { response, fetchData } = useAxios(request);
    const goToLandingPage = useRoute(LANDING_PATH);

    const handleLogin = (email, password) => {
        fetchData({ email, password });
    };

    const handleLoginWithToken = () => {
        const token = 
        fetchData({ customToken: token });
    };

    useEffect(() => {
        if (!response.isLoading && !!response.data && !response.isError) {
            onLogin(response.data);
            goToLandingPage();
        }
    }, [response]);

    return { response, handleLogin, handleLoginWithToken };
}

export default useLogin;
