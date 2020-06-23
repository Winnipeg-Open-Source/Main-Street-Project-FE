import React from 'react';
import PropTypes from 'prop-types';
import DonationsContext from 'context/Donations';
import useDonationsReducer from 'hooks/reducers/useDonationsReducer';

function Donations ({ children }) {
    const donationsProps = useDonationsReducer();

    return (
        <DonationsContext.Provider value={donationsProps}>
            {children}
        </DonationsContext.Provider>
    );
}

Donations.displayName = 'DonationProvider';

Donations.propTypes = {
    children: PropTypes.node,
};

export default Donations;
