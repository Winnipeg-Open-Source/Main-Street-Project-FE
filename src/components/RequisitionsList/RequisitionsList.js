import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'pcln-design-system';
import List from 'components/List';
import RequisitionCard from 'components/RequisitionCard';

function RequisitionsList ({ className, isLoading, requisitions, onRequisitionClick }) {
    return (
        <List className={className}>
            {requisitions && requisitions.length > 0
                ? requisitions.map(requisition => (
                    <RequisitionCard
                        key={requisition.id}
                        isLoading={isLoading}
                        {...requisition}
                        onClick={onRequisitionClick}
                    />
                ))
                : <Text textAlign='center'>No requisitions yet...</Text>
            }
        </List>
    );
}

RequisitionsList.displayName = 'RequisitionsList';

RequisitionsList.propTypes = {
    className: PropTypes.string,
    isLoading: PropTypes.bool,
    requisitions: PropTypes.array,
    onRequisitionClick: PropTypes.func,
};

RequisitionsList.defaultProps = {
    className: '',
};

export default memo(RequisitionsList);
