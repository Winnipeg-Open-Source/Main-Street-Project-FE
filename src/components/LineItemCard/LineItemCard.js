import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Flex, Text } from 'pcln-design-system';

function LineItemCard ({ className, locationName, quantity, quantityName }) {
    return (
        <Flex className={className} mb={2}>
            <Text mr={2}>{locationName}</Text>
            <Text>({quantity} {quantityName})</Text>
        </Flex>
    );
}

LineItemCard.displayName = 'LineItemCard';

LineItemCard.propTypes = {
    className: PropTypes.string,
    locationName: PropTypes.string,
    quantity: PropTypes.number,
    quantityName: PropTypes.string,
};

LineItemCard.defaultProps = {
    className: '',
    quantityName: 'Units',
};

export default memo(LineItemCard);
