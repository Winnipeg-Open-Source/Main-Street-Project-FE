import { useContext } from 'react';
import ResponsiveContext from 'context/Responsive';

function useResponsive () {
    return useContext(ResponsiveContext);
}

export default useResponsive;
