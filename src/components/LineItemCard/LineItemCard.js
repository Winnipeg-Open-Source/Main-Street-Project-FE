import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, IconButton, Text, getPaletteColor } from 'pcln-design-system';
import { Minus, Plus } from 'pcln-icons';
import Input from 'components/Input';

const StyledFlex = styled(Flex)`
    background-color: ${getPaletteColor('background.lightest')};
`;

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

    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    &[type=number] {
        -moz-appearance: textfield;
    }
`;

function LineItem ({
    id, 
    itemId,
    className,
    locationName,
    quantity,
    quantityName,
    availableQuantity,
    onItemQuantityChange,
}) {
    const changeQuantity = (value) => onItemQuantityChange(itemId, id, value);

    const onIncrementClick = () => changeQuantity(quantity >= 0 ? ++quantity : 1);
    const onDecrementClick = () => changeQuantity(quantity >= 1 ? --quantity : 0);
    const onQuantityChange = (evt) => changeQuantity(evt.target.value);

    const quantityText = availableQuantity && ` (${availableQuantity} ${quantityName})`;

    return (
        <StyledFlex className={className} justifyContent='space-between' alignItems='center' width={1} px={2}>
            <Text>{locationName}{quantityText}</Text>
            <Flex>
                <StyledButton icon={<Minus />} onClick={onDecrementClick} />
                <StyledInput type='number' value={quantity} onChange={onQuantityChange} mx={2} />
                <StyledButton icon={<Plus />} onClick={onIncrementClick} />
            </Flex>
        </StyledFlex>
    );
}

LineItem.displayName = 'LineItem';

LineItem.propTypes = {
    id: PropTypes.number,
    itemId: PropTypes.number,
    className: PropTypes.string,
    locationName: PropTypes.string,
    quantity: PropTypes.number,
    quantityName: PropTypes.string,
    availableQuantity: PropTypes.number,
    onItemQuantityChange: PropTypes.func,
};

LineItem.defaultProps = {
    className: '',
    quantity: 0,
    quantityName: 'Units',
};

export default memo(LineItem);
