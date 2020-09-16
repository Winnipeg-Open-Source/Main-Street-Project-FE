import React, { useEffect } from 'react';
import { Flex } from 'pcln-design-system';
import LoginForm from 'containers/LoginForm';
import Spinner from 'components/Spinner';
import useAuthentication from 'hooks/context/useAuthentication';
import useLogin from 'hooks/useLogin';
import usePreviousRoute from 'hooks/usePreviousRoute';

function Login () {
    const { isAttemptingLogin, isLoggedIn } = useAuthentication();
    const { handleLoginWithToken } = useLogin();
    const goToPreviousRoute = usePreviousRoute();

    useEffect(() => {
        !isLoggedIn && handleLoginWithToken();
        isLoggedIn && goToPreviousRoute();
    }, [isLoggedIn]);

    return (
        <Flex justifyContent='center' width={1} p={3}>
            {isAttemptingLogin || isLoggedIn
                ? <Flex mt={4}><Spinner /></Flex>
                : <LoginForm />
            }
        </Flex>
    );
}

Login.displayName = 'Login';

export default Login;
