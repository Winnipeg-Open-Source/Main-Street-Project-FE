import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import useSidebar from './useSidebar';
import SidebarContext from 'context/Sidebar';

const customContext = {
    isCollapsed: true,
    onSidebarToggle: () => {},
};

const SidebarContextWrapper = ({ children }) => (
    <SidebarContext.Provider value={customContext}>
        {children}
    </SidebarContext.Provider>
);

describe('useSidebar', () => {
    it('should return default context', () => {
        const { result } = renderHook(() => useSidebar());
        expect(result.current.isCollapsed).toBe(false);
        expect(result.current.onSidebarToggle).toBeDefined();
    });

    it('should return set context', () => {
        const { result } = renderHook(() => useSidebar(), {
            wrapper: SidebarContextWrapper,
        });
        expect(result.current).toBe(customContext);
    });
});
