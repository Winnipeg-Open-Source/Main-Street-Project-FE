import { createContext } from 'react';

export default createContext({
    isLoading: false,
    isError: false,
    donors: [],
});
