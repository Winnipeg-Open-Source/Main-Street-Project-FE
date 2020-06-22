import React from 'react';
import PropTypes from 'prop-types';
import DonorsContext from 'context/Donors';
import useDonorsReducer from 'hooks/reducers/useDonorsReducer';

function DonorsProvider ({ children }) {
    const donorsProps = useDonorsReducer();

    return (
        <DonorsContext.Provider value={donorsProps}>
            {children}
        </DonorsContext.Provider>
    );
}

DonorsProvider.displayName = 'DonorsProvider';

DonorsProvider.propTypes = {
    children: PropTypes.node,
};

export default DonorsProvider;
