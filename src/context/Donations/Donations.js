import { createContext } from 'react';

export const initialContext = {
    isLoading: true,
    isError: false,
    donations: [],
};

export default createContext(initialContext);
