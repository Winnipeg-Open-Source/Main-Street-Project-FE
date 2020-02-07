import { useContext } from 'react';
import SidebarContext from 'context/Sidebar';

function useSidebar () {
    return useContext(SidebarContext);
}

export default useSidebar;
