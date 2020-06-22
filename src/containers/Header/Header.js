import React from 'react';
import HeaderComponent from 'components/Header';
import useSidebar from 'hooks/context/useSidebar';

function Header () {
    const { onSidebarToggle } = useSidebar();

    return (
        <HeaderComponent onMenuClick={onSidebarToggle} />
    );
}

Header.displayName = 'Header';

export default Header;
