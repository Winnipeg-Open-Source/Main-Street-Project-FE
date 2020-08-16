import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import useRoute from 'hooks/useRoute';
import useAuthentication from 'hooks/context/useAuthentication';
import { LOGIN_PATH } from 'constants/paths';

function AuthenticatedRoute (props) {
    const { isLoggedIn } = useAuthentication();
    const goToLogin = useRoute(LOGIN_PATH);

    useEffect(() => {
        !isLoggedIn && goToLogin();
    }, [isLoggedIn]);

    return (
        <Route {...props} />
    );
}

AuthenticatedRoute.displayName = 'AuthenticatedRoute';

export default AuthenticatedRoute;
