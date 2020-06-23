import { useCallback, useEffect, useReducer } from 'react';
import { initialContext } from 'context/Donations';
import DonationsReducer from 'reducers/Donations';
import useLoadResources from 'hooks/useLoadResources';
import { loadDonations, saveDonation } from 'actions/Donations';
import { DONATIONS_API_PATH } from 'constants/api';

function useDonationsReducer () {
    const [ state, dispatch ] = useReducer(DonationsReducer, initialContext);
    const { isLoading, isError, data: donations, fetchData } = useLoadResources(DONATIONS_API_PATH);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        dispatch(loadDonations(isLoading, isError, donations));
    }, [isLoading, isError, donations]);

    const onSaveDonation = useCallback((donation) => dispatch(saveDonation(donation)));

    return {
        ...state,
        onSaveDonation,
    };
}

export default useDonationsReducer;
