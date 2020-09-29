import { ATTEMPT_LOGIN, LOGIN, LOGGED_IN, LOGIN_FAILED, LOGOUT } from 'actions/Authentication';

function Authentication (state = {}, action = {}) {
    switch (action.type) {
        case ATTEMPT_LOGIN:
            return {
                ...state,
                isAttemptingLogin: true,
                isLoggingIn: false,
                isLoginFailed: false,
            };

        case LOGIN:
            return {
                ...state,
                isAttemptingLogin: false,
                isLoggingIn: true,
                isLoginFailed: false,
            };

        case LOGGED_IN:
            return {
                ...state,
                isAttemptingLogin: false,
                isLoggingIn: false,
                isLoggedIn: true,
                isAdmin: action.user.isAdmin,
                uid: action.user.uid,
            };

        case LOGIN_FAILED:
            const isLoginFailed = state.isAttemptingLogin === false;
            return {
                ...state,
                isAttemptingLogin: false,
                isLoggingIn: false,
                isLoginFailed,
            };

        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
            };

        default:
            return state;
    }
}

export default Authentication;
