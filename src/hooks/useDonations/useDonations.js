import { useContext } from 'react';
import DonationsContext from 'context/Donations';

function useDonations () {
    return useContext(DonationsContext);
}

export default useDonations;
