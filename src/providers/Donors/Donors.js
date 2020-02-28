import React from 'react';
import PropTypes from 'prop-types';
import DonorsContext from 'context/Donors';
import useDonorsRequest from 'hooks/useDonorsRequest';

function DonorsProvider ({ children }) {
    const response = useDonorsRequest();

    return (
        <DonorsContext.Provider value={response}>
            {children}
        </DonorsContext.Provider>
    )
}

DonorsProvider.displayName = 'DonorsProvider';

DonorsProvider.propTypes = {
    children: PropTypes.node,
};

export default DonorsProvider;
