import React, { useReducer } from 'react';
import AuthenticationContext from 'context/Authentication';
import AuthenticationReducer from 'reducers/Authentication';
import { login, logout } from 'actions/Authentication';

function Authentication ({ children }) {
    const [ state, dispatch ] = useReducer(AuthenticationReducer);

    const onLogin = (user) => dispatch(login(user));
    const onLogout = () => dispatch(logout());

    const props = {
        ...state,
        onLogin,
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
