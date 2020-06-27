import React from 'react';
import PropTypes from 'prop-types';
import RequisitionsContext from 'context/Requisitions';
import useResourcesReducer from 'hooks/reducers/useResourcesReducer';
import { REQUISITIONS_API_PATH } from 'constants/api';

function RequisitionsProvider ({ children }) {
    const { isLoading, isError, data, onSave } = useResourcesReducer(REQUISITIONS_API_PATH);

    const props = {
        isLoading,
        isError,
        requisitions: data,
        onSaveRequisition: onSave,
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
