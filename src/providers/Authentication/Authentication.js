import React, { useReducer } from 'react';
import AuthenticationContext from 'context/Authentication';
import AuthenticationReducer from 'reducers/Authentication';
import {
    attemptLogin,
    login,
    loggedIn,
    loginFailed,
    logout,
} from 'actions/Authentication';
import { initialContext } from 'context/Authentication';

function Authentication ({ children }) {
    const [state, dispatch] = useReducer(AuthenticationReducer, initialContext);

    const onAttemptLogin = () => dispatch(attemptLogin());
    const onLogin = () => dispatch(login());
    const onLoggedIn = (user) => dispatch(loggedIn(user));
    const onLoginFailed = () => dispatch(loginFailed());
    const onLogout = () => dispatch(logout());

    const props = {
        ...state,
        onAttemptLogin,
        onLogin,
        onLoggedIn,
        onLoginFailed,
        onLogout,
    };

    return (
        <AuthenticationContext.Provider value={props}>
            {children}
        </AuthenticationContext.Provider>
    );
}

Authentication.displayName = 'AuthenticationProvider';

export default Authentication;
