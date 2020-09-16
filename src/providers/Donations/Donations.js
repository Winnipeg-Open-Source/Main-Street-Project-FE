import React from 'react';
import PropTypes from 'prop-types';
import DonationsContext from 'context/Donations';
import useResourcesReducer from 'hooks/reducers/useResourcesReducer';
import { DONATIONS_API_PATH } from 'constants/api';

function Donations ({ children }) {
    const { isLoading, isError, data, onSave, onLoad } = useResourcesReducer(DONATIONS_API_PATH);

    const props = {
        isLoading,
        isError,
        donations: data,
        onSaveDonation: onSave,
        onLoadDonations: onLoad,
    };

    return (
        <DonationsContext.Provider value={props}>
            {children}
        </DonationsContext.Provider>
    );
}

Donations.displayName = 'DonationProvider';

Donations.propTypes = {
    children: PropTypes.node,
};

export default Donations;
