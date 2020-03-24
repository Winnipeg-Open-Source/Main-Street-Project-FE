import { createContext } from 'react';

export default createContext({
    isLoading: false,
    isError: false,
    donors: [],
    donor: {
        id: null,
        name: null,
        address: null,
        city: null,
        province: null,
        postalCode: null,
        phoneNumber: null,
        email: null,
        isSubscribed: null,
    },
});
