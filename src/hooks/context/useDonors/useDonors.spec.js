import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import useDonors from './useDonors';
import DonorsContext from 'context/Donors';

const customContext = {
    isLoading: false,
    donors: [],
};

const DonorsContextWrapper = ({ children }) => (
    <DonorsContext.Provider value={customContext}>
        {children}
    </DonorsContext.Provider>
);

describe('useDonors', () => {
    it('should return default context', () => {
        const { result } = renderHook(() => useDonors());
        expect(result.current.isLoading).toBe(true);
        expect(result.current.donors).toStrictEqual([]);
    });

    it('should return set context', () => {
        const { result } = renderHook(() => useDonors(), {
            wrapper: DonorsContextWrapper,
        });
        expect(result.current).toBe(customContext);
    });
});
