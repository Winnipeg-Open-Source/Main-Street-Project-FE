import { useContext } from 'react';
import DonorsContext from 'context/Donors';

function useDonor (id) {
    const { donors, ...rest } = useContext(DonorsContext);
    const donor = donors && donors.find((donor) => donor.id == id);

    return {
        ...rest,
        donor,
    };
}

export default useDonor;
