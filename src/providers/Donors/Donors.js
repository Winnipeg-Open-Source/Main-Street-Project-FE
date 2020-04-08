import React, { useCallback, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import DonorsReducer from 'reducers/Donors';
import DonorsContext, { initialContext } from 'context/Donors';
import useDonorsRequest from 'hooks/useDonorsRequest';
import { loadDonors, saveDonor } from 'actions/Donors';

function DonorsProvider ({ children }) {
    const [ state, dispatch ] = useReducer(DonorsReducer, initialContext);
    const { isLoading, isError, donors, fetchData } = useDonorsRequest();

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        dispatch(loadDonors(isLoading, isError, donors));
    }, [isLoading, isError, donors]);

    const onSaveDonor = useCallback((donor) => dispatch(saveDonor(donor)), [dispatch, saveDonor]);

    const props = {
        ...state,
        onSaveDonor,
    };

    return (
        <DonorsContext.Provider value={props}>
            {children}
        </DonorsContext.Provider>
    );
}

DonorsProvider.displayName = 'DonorsProvider';

DonorsProvider.propTypes = {
    children: PropTypes.node,
};

export default DonorsProvider;
