import { createContext } from 'react';

export const initialContext = {
    isAttemptingLogin: true,
    isLoggingIn: true,
    isLoggedIn: false,
    isLoginFailed: false,
};

export default createContext(initialContext);
