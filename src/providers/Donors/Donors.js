import React from 'react';
import PropTypes from 'prop-types';
import DonorsContext from 'context/Donors';
import useDonorsRequest from 'hooks/useDonorsRequest';

function DonorsProvider ({ donors, children }) {
    const response = useDonorsRequest();

    const props = donors && {
        isLoading: false,
        donors,
    };

    return (
        <DonorsContext.Provider value={props || response}>
            {children}
        </DonorsContext.Provider>
    )
}

DonorsProvider.displayName = 'DonorsProvider';

DonorsProvider.propTypes = {
    children: PropTypes.node,
};

export default DonorsProvider;
