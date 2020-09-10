import { useEffect } from 'react';
import useAuthentication from 'hooks/context/useAuthentication';
import useAxios from 'hooks/useAxios';
import useRoute from 'hooks/useRoute';
import { SIGN_UP_API_PATH } from 'constants/api';
import { LANDING_PATH } from 'constants/paths';

const request = {
    url: SIGN_UP_API_PATH,
    method: 'post',
};

function useSignUp () {
    const { onLogin } = useAuthentication();
    const { response, fetchData } = useAxios(request);
    const goToLandingPage = useRoute(LANDING_PATH);

    const handleSignUp = (email, password) => {
        fetchData({ email, password });
    };

    useEffect(() => {
        if (!response.isLoading && !!response.data) {
            onLogin();
            goToLandingPage();
        }
    }, [response]);

    return { response, handleSignUp };
}

export default useSignUp;
