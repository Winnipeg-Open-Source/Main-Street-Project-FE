export const ATTEMPT_LOGIN = 'ATTEMPT_LOGIN';
export const LOGIN = 'LOGIN';
export const LOGGED_IN = 'LOGGED_IN';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT = 'LOGOUT';

export const attemptLogin = () => ({
    type: ATTEMPT_LOGIN,
});

export const login = () => ({
    type: LOGIN,
});

export const loggedIn = (user) => ({
    type: LOGGED_IN,
    user,
});

export const loginFailed = () => ({
    type: LOGIN_FAILED,
});

export const logout = () => ({
    type: LOGOUT,
});
