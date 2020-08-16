import { createContext } from 'react';

const initialContext = {
    isLoggedIn: false,
}

export default createContext(initialContext);
