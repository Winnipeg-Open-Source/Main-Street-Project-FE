import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import useResponsive from './useResponsive';
import ResponsiveContext from 'context/Responsive';

const customContext = {
    isMobile: false,
    currentBreakpoint: 'xs',
};

const ResponsiveContextWrapper = ({ children }) => (
    <ResponsiveContext.Provider value={customContext}>
        {children}
    </ResponsiveContext.Provider>
);

describe ('useResponsive', () => {
    it ('should return default context', () => {
        const { result } = renderHook(() => useResponsive());
        expect(result.current.isMobile).toBe(false);
        expect(result.current.currentBreakpoint).toBe('xs');
    });

    it ('should return set context', () => {
        const { result } = renderHook(() => useResponsive(), { wrapper: ResponsiveContextWrapper });
        expect(result.current).toBe(customContext);
    });
});
