import React from 'react';
import PropTypes from 'prop-types';
import List from 'components/List';
import DonorCard from 'components/DonorCard';

function DonorsList ({ className, donors }) {
    return (
        <List className={className}>
            {donors && donors.map(donor => <DonorCard key={donor.id} {...donor} />)}
        </List>
    );
}

DonorsList.displayName = 'DonorsList';

DonorsList.propTypes = {
    className: PropTypes.string,
};

DonorsList.defaultProps = {
    className: '',
};

export default DonorsList;
