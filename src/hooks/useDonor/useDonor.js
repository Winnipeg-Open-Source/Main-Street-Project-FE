import { useContext } from 'react';
import DonorsContext from 'context/Donors';

function useDonor (id) {
    const { donors } = useContext(DonorsContext);

    return donors && donors.find(donor => donor.id === id);
};

export default useDonor;
