import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'pcln-design-system';
import List from 'components/List';
import DonorCard from 'components/DonorCard';

function DonorsList ({ className, donors }) {
    return (
        <List className={className}>
            {donors && donors.length > 0
                ? donors.map(donor => <DonorCard key={donor.id} {...donor} />)
                : <Text textAlign='center'>No donors yet...</Text>
            }
        </List>
    );
}

DonorsList.displayName = 'DonorsList';

DonorsList.propTypes = {
    className: PropTypes.string,
    donors: PropTypes.array,
};

DonorsList.defaultProps = {
    className: '',
};

export default DonorsList;
