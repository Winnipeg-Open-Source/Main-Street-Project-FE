import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import useDonors from './useDonors';
import DonorContext from 'context/Donors';

const customContext = {
    isLoading: false,
    donors: [],
};

const DonorContextWrapper = ({ children }) => (
    <DonorContext.Provider value={customContext}>
        {children}
    </DonorContext.Provider>
);

describe ('useDonors', () => {
    it ('should return default context', () => {
        const { result } = renderHook(() => useDonors());
        expect(result.current.isLoading).toBe(false);
        expect(result.current.donors).toStrictEqual([]);
    });

    it ('should return set context', () => {
        const { result } = renderHook(() => useDonors(), { wrapper: DonorContextWrapper });
        expect(result.current).toBe(customContext);
    });
});
