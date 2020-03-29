import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import DonorsReducer from 'reducers/Donors';
import DonorsContext, { initialContext } from 'context/Donors';
import useDonorsRequest from 'hooks/useDonorsRequest';
import { loadDonors, saveDonor } from 'actions/Donors';

function DonorsProvider ({ children }) {
    const [ state, dispatch ] = useReducer(DonorsReducer, initialContext);
    const { response, fetchData } = useDonorsRequest();

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        dispatch(loadDonors(response));
    }, [response]);

    const onSaveDonor = (donor) => dispatch(saveDonor(donor));

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
