import { useContext } from 'react';
import DonorsContext from 'context/Donors';

function useDonors () {
    return useContext(DonorsContext);
}

export default useDonors;
