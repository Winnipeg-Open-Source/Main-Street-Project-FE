import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'pcln-design-system';
import List from 'components/List';
import DonorCard from 'components/DonorCard';
import { getDonorPath } from 'constants/paths';

function DonorsList ({ className, isLoading, donors, onDonorClick }) {
    return (
        <List className={className}>
            {donors && donors.length > 0
                ? donors.map(donor => (
                    <DonorCard
                        key={donor.id}
                        isLoading={isLoading}
                        {...donor}
                        onClick={() => onDonorClick(getDonorPath(donor.id))}
                    />
                ))
                : <Text textAlign='center'>No donors yet...</Text>
            }
        </List>
    );
}

DonorsList.displayName = 'DonorsList';

DonorsList.propTypes = {
    className: PropTypes.string,
    isLoading: PropTypes.bool,
    donors: PropTypes.array,
    onDonorClick: PropTypes.func,
};

DonorsList.defaultProps = {
    className: '',
};

export default DonorsList;
