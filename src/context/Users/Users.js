import { createContext } from 'react';

export const initialContext = {
    isLoading: true,
    isError: false,
    users: [],
};

export default createContext(initialContext);
