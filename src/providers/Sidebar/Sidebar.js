import React from 'react';
import SidebarContext from 'context/Sidebar';
import useToggle from 'hooks/useToggle';

function Sidebar ({ children }) {
    const [ isCollapsed, onToggle ] = useToggle(true);

    const props = {
        isCollapsed,
        onSidebarToggle: onToggle,
    };

    return (
        <SidebarContext.Provider value={props}>
            {children}
        </SidebarContext.Provider>
    );
}

Sidebar.displayName = 'SidebarProvider';

export default Sidebar;
