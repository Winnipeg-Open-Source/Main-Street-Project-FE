import React from 'react';
import ResponsiveContext from 'context/Responsive';
import useBreakpoint from 'hooks/useBreakpoint';

function ResponsiveProvider ({ children }) {
    const { isMobile, currentBreakpoint } = useBreakpoint();

    const props = {
        isMobile,
        currentBreakpoint,
    };

    return (
        <ResponsiveContext.Provider value={props}>
            {children}
        </ResponsiveContext.Provider>
    );
}

ResponsiveProvider.displayName = 'ResponsiveProvider';

export default ResponsiveProvider;
