import React, { memo } from 'react';
import PropTypes from 'prop-types';
import List from 'components/List';
import RequisitionCard from 'components/RequisitionCard';

function RequisitionsListSkeleton ({ className }) {
    return (
        <List className={className}>
            <RequisitionCard isLoading />
            <RequisitionCard isLoading />
            <RequisitionCard isLoading />
        </List>
    );
}

RequisitionsListSkeleton.displayName = 'RequisitionsListSkeleton';

RequisitionsListSkeleton.propTypes = {
    className: PropTypes.string,
};

RequisitionsListSkeleton.defaultProps = {
    className: '',
};

export default memo(RequisitionsListSkeleton);
