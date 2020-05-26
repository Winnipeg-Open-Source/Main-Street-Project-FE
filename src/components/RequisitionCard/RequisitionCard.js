import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'pcln-design-system';
import Card from 'components/Card';
import { getRequisitionPath } from 'constants/paths';

function RequisitionCard ({ id, className, onClick }) {
    const onRequisitionClick = () => onClick(getRequisitionPath(id));

    return (
        <Card className={className} onClick={onRequisitionClick}>
            <Text></Text>
        </Card>
    );
}

RequisitionCard.displayName = 'RequisitionCard';

RequisitionCard.propTypes = {
    className: PropTypes.string,
};

RequisitionCard.defaultProps = {
    className: '',
};

export default memo(RequisitionCard);
