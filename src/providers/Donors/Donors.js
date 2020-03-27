import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import DonorsReducer from 'reducers/Donors';
import DonorsContext, { initialContext } from 'context/Donors';
import useDonorsRequest from 'hooks/useDonorsRequest';
import { loadDonors, saveDonor } from 'actions/Donors';

function DonorsProvider ({ children }) {
    const [ state, dispatch ] = useReducer(DonorsReducer, initialContext);
    const { response, fetchData } = useDonorsRequest(dispatch);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        loadDonors(response);
    }, [response]);

    const props = {
        ...state,
        saveDonor,
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
