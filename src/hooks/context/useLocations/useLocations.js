import { useContext } from 'react';
import LocationsContext from 'context/Locations';

function useLocations () {
    return useContext(LocationsContext);
}

export default useLocations;
