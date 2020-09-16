import { createContext } from 'react';

export const initialContext = {
    isLoading: true,
    isError: false,
    locations: [],
};

export default createContext(initialContext);
