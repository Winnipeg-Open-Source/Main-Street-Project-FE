import { useContext } from 'react';
import SavingContext from 'context/Saving';

function useSaving () {
    return useContext(SavingContext);
}

export default useSaving;
