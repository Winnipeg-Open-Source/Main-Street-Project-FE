import { createContext } from 'react';

export const initialContext = {
    isLoading: true,
    isError: false,
    requisitions: [],
};

export default createContext(initialContext);
