import React, { useEffect } from 'react';
import LoadingOverlay from 'components/LoadingOverlay';
import useLogout from 'hooks/useLogout';

function Logout () {
    const { handleLogout } = useLogout();

    useEffect(() => {
        handleLogout();
    }, []);

    return <LoadingOverlay isLoading>Logging Out...</LoadingOverlay>;
}

Logout.displayName = 'Logout';

export default Logout;
