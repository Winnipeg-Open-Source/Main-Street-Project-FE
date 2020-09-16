import React from 'react';
import HeaderComponent from 'components/Header';
import useAuthentication from 'hooks/context/useAuthentication';
import useSidebar from 'hooks/context/useSidebar';

function Header () {
    const { isLoggedIn } = useAuthentication();
    const { onSidebarToggle } = useSidebar();

    return (
        <HeaderComponent isLoggedIn={isLoggedIn} onMenuClick={onSidebarToggle} />
    );
}

Header.displayName = 'Header';

export default Header;
