import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, getPaletteColor } from 'pcln-design-system';
import ItemAutocomplete from 'components/ItemAutocomplete';
import LineItemCard from 'components/LineItemCard';

const StyledFlex = styled(Flex)`
    & > :not(:first-child) {
        margin-top: 8px;
    }
`;

const StyledLineItemCard = styled(LineItemCard)`
    border: 1px solid ${getPaletteColor('border.base')};
    padding: 8px;
`;

function LineItemForm ({
    className,
    isLoading,
    locations,
    lineItems,
    onAddClick,
    onItemQuantityChange,
}) {
    return (
        <StyledFlex className={className} flexDirection='column' width={1}>
            <ItemAutocomplete
                isLoading={isLoading}
                placeholder='Location Search'
                items={locations}
                onChange={onAddClick}
            />
            {lineItems && lineItems.map(lineItem => {
                return (
                    <StyledLineItemCard
                        {...lineItem}
                        onItemQuantityChange={onItemQuantityChange}
                    />
                );
            })}
        </StyledFlex>
    );
}

LineItemForm.displayName = 'LineItemForm';

LineItemForm.propTypes = {
    className: PropTypes.string,
    isLoading: PropTypes.bool,
    locations: PropTypes.array,
    lineItems: PropTypes.array,
    onAddClick: PropTypes.func,
    onItemQuantityChange: PropTypes.func,
};

LineItemForm.defaultProps = {
    className: '',
    quantityName: 'Units',
};

export default memo(LineItemForm);
