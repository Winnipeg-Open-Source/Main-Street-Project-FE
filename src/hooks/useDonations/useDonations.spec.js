import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import useDonations from './useDonations';
import DonationsContext from 'context/Donations';

const customContext = {
    isLoading: false,
    donations: [{ id: 1 }],
};

const DonationsContextWrapper = ({ children }) => (
    <DonationsContext.Provider value={customContext}>
        {children}
    </DonationsContext.Provider>
);

describe ('useDonations', () => {
    it ('should return default context', () => {
        const { result } = renderHook(() => useDonations());
        expect(result.current.isLoading).toBe(true);
        expect(result.current.donations).toStrictEqual([]);
    });

    it ('should return set context', () => {
        const { result } = renderHook(() => useDonations(), { wrapper: DonationsContextWrapper });
        expect(result.current).toBe(customContext);
    });
});
