import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import useRequisitions from './useRequisitions';
import RequisitionsContext from 'context/Requisitions';

const customContext = {
    isLoading: false,
    requisitions: [],
};

const RequisitionsContextWrapper = ({ children }) => (
    <RequisitionsContext.Provider value={customContext}>
        {children}
    </RequisitionsContext.Provider>
);

describe ('useRequisitions', () => {
    it ('should return default context', () => {
        const { result } = renderHook(() => useRequisitions());
        expect(result.current.isLoading).toBe(true);
        expect(result.current.requisitions).toStrictEqual([]);
    });

    it ('should return set context', () => {
        const { result } = renderHook(() => useRequisitions(), { wrapper: RequisitionsContextWrapper });
        expect(result.current).toBe(customContext);
    });
});
