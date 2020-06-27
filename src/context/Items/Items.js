import { createContext } from 'react';

export const initialContext = {
    isLoading: true,
    isError: false,
    items: [],
};

export default createContext(initialContext);
