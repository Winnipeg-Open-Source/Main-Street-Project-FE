import React, { useCallback, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import RequisitionsReducer from 'reducers/Requisitions';
import RequisitionsContext, { initialContext } from 'context/Requisitions';
import useLoadRequisitions from 'hooks/useLoadRequisitions';
import { loadRequisitions, saveRequisition } from 'actions/Requisitions';

function RequisitionsProvider ({ children }) {
    const [ state, dispatch ] = useReducer(RequisitionsReducer, initialContext);
    const { isLoading, isError, requisitions, fetchData } = useLoadRequisitions();

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        dispatch(loadRequisitions(isLoading, isError, requisitions));
    }, [isLoading, isError, requisitions]);

    const onSaveRequisition = useCallback((requisition) => dispatch(saveRequisition(requisition)), [dispatch, saveRequisition])

    const props = {
        ...state,
        onSaveRequisition,
    };

    return (
        <RequisitionsContext.Provider value={props}>
            {children}
        </RequisitionsContext.Provider>
    )
}

RequisitionsProvider.displayName = 'RequisitionsProvider';

RequisitionsProvider.propTypes = {
    children: PropTypes.node,
};

export default RequisitionsProvider;
