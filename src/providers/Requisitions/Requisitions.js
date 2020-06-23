import React from 'react';
import PropTypes from 'prop-types';
import RequisitionsContext from 'context/Requisitions';
import useRequisitionsReducer from 'hooks/reducers/useRequisitionsReducer';

function RequisitionsProvider ({ children }) {
    const requisitionsProps = useRequisitionsReducer();

    return (
        <RequisitionsContext.Provider value={requisitionsProps}>
            {children}
        </RequisitionsContext.Provider>
    )
}

RequisitionsProvider.displayName = 'RequisitionsProvider';

RequisitionsProvider.propTypes = {
    children: PropTypes.node,
};

export default RequisitionsProvider;
