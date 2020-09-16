import { createContext } from 'react';

export const initialContext = {
    isLoading: true,
    isError: false,
    donors: [],
};

export default createContext(initialContext);
