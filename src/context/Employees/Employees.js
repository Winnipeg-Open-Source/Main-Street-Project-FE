import { createContext } from 'react';

export const initialState = {
    isLoading: true,
    isError: false,
    employees: [],
};

export default createContext(initialState);
