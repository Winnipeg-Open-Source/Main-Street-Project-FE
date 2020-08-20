import React, { useEffect } from 'react';
import { Flex } from 'pcln-design-system';
import LoginForm from 'containers/LoginForm';
import useAuthentication from 'hooks/context/useAuthentication';
import useLogin from 'hooks/useLogin';
import useRoute from 'hooks/useRoute';
import { LANDING_PATH } from 'constants/paths';

function Login () {
    const { isLoggedIn } = useAuthentication();
    const { handleLoginWithToken } = useLogin();
    const goToLandingPage = useRoute(LANDING_PATH);

    useEffect(() => {
        !isLoggedIn && handleLoginWithToken();
        isLoggedIn && goToLandingPage();
    }, []);

    return (
        <Flex justifyContent='center' width={1} p={3}>
            <LoginForm />
        </Flex>
    );
}

Login.displayName = 'Login';

export default Login;
