import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Text } from 'pcln-design-system';
import { Close as CloseIcon } from 'pcln-icons';
import Card from 'components/Card';

const CloseButton = styled(CloseIcon)`
    cursor: pointer;
`;

function ItemCard ({ className, name, quantity, quantityName, onDeleteClick }) {
    return (
        <Card className={className} alignItems='center' row>
            <Flex flexDirection='column' width={1}>
                <Text bold>{name}</Text>
                <Text>{quantity} {quantityName || 'Units'}</Text>
            </Flex>
            <CloseButton onClick={onDeleteClick} />
        </Card>
    );
}

ItemCard.displayName = 'ItemCard';

ItemCard.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    quantityName: PropTypes.string,
    onDeleteClick: PropTypes.func,
};

ItemCard.defaultProps = {
    className: '',
};

export default memo(ItemCard);
