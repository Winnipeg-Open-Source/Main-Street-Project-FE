import { createContext } from 'react';

export const initialState = {
    isLoading: true,
    isError: false,
    items: [],
};

export default createContext(initialState);
