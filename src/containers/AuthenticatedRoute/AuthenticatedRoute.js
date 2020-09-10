import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import useRoute from 'hooks/useRoute';
import useRedirectToLogin from 'hooks/useRedirectToLogin';
import useAuthentication from 'hooks/context/useAuthentication';
import { LANDING_PATH } from 'constants/paths';

function AuthenticatedRoute ({ requiresAdmin, ...props }) {
    const { isLoggedIn, isAdmin } = useAuthentication();
    const goToLogin = useRedirectToLogin();
    const goToLandingPage = useRoute(LANDING_PATH);

    useEffect(() => {
        !isLoggedIn && goToLogin();
        isLoggedIn && requiresAdmin && !isAdmin && goToLandingPage();
    }, [isLoggedIn]);

    return (
        <Route {...props} />
    );
}

AuthenticatedRoute.displayName = 'AuthenticatedRoute';

export default AuthenticatedRoute;
