import { useState, useEffect, useMemo } from 'react';
import { breakpoints } from 'pcln-design-system';

const breakpointMap = {
    '20em': 'xs',
    '32em': 'sm',
    '40em': 'md',
    '48em': 'lg',
    '64em': 'xl',
    '80em': 'xxl',
};

function getCurrentBreakpoint (width) {
    const size = breakpoints.find(breakpoint => {
        const em = parseInt(breakpoint.replace('em', ''));
        return width <= em * 16;
    });

    return breakpointMap[size] || 'xxl';
}

function isMobileDevice () {
    return navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i);
}

function isMobileCheck () {
    return (typeof window === 'object' && window.isMobile) || isMobileDevice();
}

function useBreakpoint () {
    const hasWindow = typeof window === 'object';

    function getSize () {
        return {
            width: hasWindow ? window.innerWidth : undefined,
            height: hasWindow ? window.innerHeight : undefined,
        };
    }

    const [ windowSize, setWindowSize ] = useState(getSize);

    useEffect(() => {
        if (!hasWindow) {
            return false;
        }

        function handleResize () {
            setWindowSize(getSize());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });

    const currentBreakpoint = getCurrentBreakpoint(windowSize.width);
    const isMobile = isMobileCheck() || currentBreakpoint === 'xs' || currentBreakpoint === 'sm';

    return useMemo(() => ({
        ...windowSize,
        isMobile,
        currentBreakpoint,
    }), [ isMobile, currentBreakpoint ]);
}

export default useBreakpoint;
