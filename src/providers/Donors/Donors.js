import React from 'react';
import PropTypes from 'prop-types';
import DonorsContext from 'context/Donors';
import useResourcesReducer from 'hooks/reducers/useResourcesReducer';
import { DONORS_API_PATH } from 'constants/api';

function DonorsProvider ({ children }) {
    const { isLoading, isError, data, onSave, onLoad } = useResourcesReducer(
        DONORS_API_PATH
    );

    const props = {
        isLoading,
        isError,
        donors: data,
        onSaveDonor: onSave,
        onLoadDonors: onLoad,
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
