import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import useItems from './useItems';
import ItemsContext from 'context/Items';

const customContext = {
    isLoading: false,
    items: [],
};

const ItemsContextWrapper = ({ children }) => (
    <ItemsContext.Provider value={customContext}>
        {children}
    </ItemsContext.Provider>
);

describe('useItems', () => {
    it('should return default context', () => {
        const { result } = renderHook(() => useItems());
        expect(result.current.isLoading).toBe(true);
        expect(result.current.items).toStrictEqual([]);
    });

    it('should return set context', () => {
        const { result } = renderHook(() => useItems(), {
            wrapper: ItemsContextWrapper,
        });
        expect(result.current).toBe(customContext);
    });
});
