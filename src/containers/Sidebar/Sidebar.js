import React from 'react';
import { useLocation } from 'react-router-dom';
import SidebarComponent from 'components/Sidebar';
import useResponsive from 'hooks/useResponsive';
import useAuthentication from 'hooks/context/useAuthentication';
import useSidebar from 'hooks/context/useSidebar';
import routes from 'constants/routes';

function Sidebar () {
    const { isLoggedIn, isAdmin } = useAuthentication();
    const { currentBreakpoint } = useResponsive();
    const { isCollapsed, onSidebarToggle } = useSidebar();
    const { pathname } = useLocation();

    const isSmallBreakpoint =
        currentBreakpoint === 'xs' || currentBreakpoint === 'sm';

    return isLoggedIn ? (
        <SidebarComponent
            isAdmin={isAdmin}
            isMobileSidebar={isSmallBreakpoint}
            isCollapsed={isCollapsed}
            currentPathname={pathname}
            routes={routes}
            onClose={onSidebarToggle}
        />
    ) : null;
}

Sidebar.displayName = 'Sidebar';

export default Sidebar;
