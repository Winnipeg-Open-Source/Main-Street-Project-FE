import { useCallback, useEffect, useReducer } from 'react';
import { initialContext } from 'context/Donations';
import DonationsReducer from 'reducers/Donations';
import useLoadDonations from 'hooks/useLoadDonations';
import { loadDonations, saveDonation } from 'actions/Donations';

function useDonationsReducer () {
    const [ state, dispatch ] = useReducer(DonationsReducer, initialContext);
    const { isLoading, isError, donations, fetchData } = useLoadDonations();

    useEffect(() => {
        fetchData();
    }, [fetchData]);

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
