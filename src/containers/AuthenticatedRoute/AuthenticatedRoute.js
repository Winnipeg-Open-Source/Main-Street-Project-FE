import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import useRedirectToLogin from 'hooks/useRedirectToLogin';
import useAuthentication from 'hooks/context/useAuthentication';

function AuthenticatedRoute (props) {
    const { isLoggedIn } = useAuthentication();
    const goToLogin = useRedirectToLogin();

    useEffect(() => {
        !isLoggedIn && goToLogin();
    }, [isLoggedIn]);

    return (
        <Route {...props} />
    );
}

AuthenticatedRoute.displayName = 'AuthenticatedRoute';

export default AuthenticatedRoute;
