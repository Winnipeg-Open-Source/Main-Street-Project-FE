import { createContext } from 'react';

export const initialContext = {
    isAttemptingLogin: true,
    isLoggingIn: true,
    isLoggedIn: false,
    isLoginFailed: false,
    isAdmin: false,
};

export default createContext(initialContext);
