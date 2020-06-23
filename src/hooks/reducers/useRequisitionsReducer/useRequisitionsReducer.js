import { useCallback, useEffect, useReducer } from 'react';
import { initialContext } from 'context/Requisitions';
import RequisitionsReducer from 'reducers/Requisitions';
import useLoadResources from 'hooks/useLoadResources';
import { loadRequisitions, saveRequisition } from 'actions/Requisitions';
import { REQUISITIONS_API_PATH } from 'constants/api';

function useRequisitionsReducer () {
    const [ state, dispatch ] = useReducer(RequisitionsReducer, initialContext);
    const { isLoading, isError, data: requisitions, fetchData } = useLoadResources(REQUISITIONS_API_PATH);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        dispatch(loadRequisitions(isLoading, isError, requisitions));
    }, [isLoading, isError, requisitions]);

    const onSaveRequisition = useCallback((requisition) => dispatch(saveRequisition(requisition)));

    return {
        ...state,
        onSaveRequisition,
    };
}

export default useRequisitionsReducer;
