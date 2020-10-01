import React, { memo } from 'react';
import styled from 'styled-components';
import { useSwipeable } from 'react-swipeable';
import useResponsive from 'hooks/useResponsive';
import useAuthentication from 'hooks/context/useAuthentication';
import useSidebar from 'hooks/context/useSidebar';

const Overlay = styled('div')`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 16px;
`;

function SwipeOverlay () {
    const { isMobile } = useResponsive();
    const { isLoggedIn } = useAuthentication();
    const { onSidebarChange } = useSidebar();

    const swipeProps = useSwipeable({
        onSwipedRight: () => onSidebarChange(false),
        preventDefaultTouchmoveEvent: true,
    });

    return isMobile && isLoggedIn && (
        <Overlay {...swipeProps} />
    );
}

export default memo(SwipeOverlay);
