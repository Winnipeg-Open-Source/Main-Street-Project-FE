import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, IconButton, Text, getPaletteColor } from 'pcln-design-system';
import { Minus, Plus } from 'pcln-icons';
import Input from 'components/Input';

const StyledButton = styled(IconButton)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border: 1px solid ${getPaletteColor('text.base')};
    border-radius: 50%;
`;

const StyledInput = styled(Input)`
    width: 75px;
    height: 25px;
    text-align: center;
`;

function LineItem ({
    className,
    locationName,
    quantity,
    quantityName,
    count,
    onIncrementClick,
    onDecrementClick,
    onCountChange,
}) {
    return (
        <Flex className={className} justifyContent='space-between' alignItems='center' width={1} px={2}>
            <Text>{locationName} ({quantity} {quantityName})</Text>
            <Flex>
                <StyledButton icon={<Minus />} onClick={onDecrementClick} />
                <StyledInput value={count} onChange={onCountChange} mx={2} />
                <StyledButton icon={<Plus />} onClick={onIncrementClick} />
            </Flex>
        </Flex>
    );
}

LineItem.displayName = 'LineItem';

LineItem.propTypes = {
    className: PropTypes.string,
    locationName: PropTypes.string,
    quantity: PropTypes.number,
    quantityName: PropTypes.string,
};

LineItem.defaultProps = {
    className: '',
    quantityName: 'Units',
};

export default memo(LineItem);
