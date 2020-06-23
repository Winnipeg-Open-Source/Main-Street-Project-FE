import { useCallback, useEffect, useReducer } from 'react';
import DonorsReducer from 'reducers/Donors';
import { initialContext } from 'context/Donors';
import useLoadResources from 'hooks/useLoadResources';
import { loadDonors, saveDonor } from 'actions/Donors';
import { DONORS_API_PATH } from 'constants/api';

function useDonorsReducer () {
    const [ state, dispatch ] = useReducer(DonorsReducer, initialContext);
    const { isLoading, isError, data: donors, fetchData } = useLoadResources(DONORS_API_PATH);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        dispatch(loadDonors(isLoading, isError, donors));
    }, [isLoading, isError, donors]);

    const onSaveDonor = useCallback((donor) => dispatch(saveDonor(donor)), [dispatch, saveDonor]);

    return {
        ...state,
        onSaveDonor,
    };
}

export default useDonorsReducer;
