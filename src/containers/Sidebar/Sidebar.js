import React from 'react';
import { useLocation } from 'react-router-dom';
import SidebarComponent from 'components/Sidebar';
import useResponsive from 'hooks/useResponsive';
import useSidebar from 'hooks/context/useSidebar';
import routes from 'constants/routes';

function Sidebar () {
    const { currentBreakpoint } = useResponsive();
    const { isCollapsed, onSidebarToggle } = useSidebar();
    const { pathname } = useLocation();

    const isSmallBreakpoint = currentBreakpoint === 'xs' || currentBreakpoint === 'sm';

    return (
        <SidebarComponent
            isMobileSidebar={isSmallBreakpoint}
            isCollapsed={isCollapsed}
            currentPathname={pathname}
            routes={routes}
            onClose={onSidebarToggle}
        />
    );
}

Sidebar.displayName = 'Sidebar';

export default Sidebar;
