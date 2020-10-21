import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import Collapse from 'components/Collapse';
import LineItemCard from 'components/LineItemCard';

function ItemCard ({
    id,
    className,
    isEditable,
    name,
    quantityName,
    lineItems,
    onItemQuantityChange,
}) {
    const totalQuantity = useMemo(
        () =>
            lineItems &&
            lineItems.reduce((total, lineItem) => total + lineItem.quantity, 0),
        [lineItems]
    );
    const title = totalQuantity
        ? `${name} (${totalQuantity} ${quantityName})`
        : name;

    return (
        <Collapse className={className} title={title} alignItems='center' row>
            {lineItems &&
                lineItems.map((lineItem) => (
                    <LineItemCard
                        {...lineItem}
                        isEditable={isEditable}
                        itemId={id}
                        quantityName={quantityName}
                        onItemQuantityChange={onItemQuantityChange}
                    />
                ))}
        </Collapse>
    );
}

ItemCard.displayName = 'ItemCard';

ItemCard.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    isEditable: PropTypes.bool,
    name: PropTypes.string.isRequired,
    quantityName: PropTypes.string,
    lineItems: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        locationName: PropTypes.string,
        quantity: PropTypes.number,
    }),
    onItemQuantityChange: PropTypes.func,
};

ItemCard.defaultProps = {
    className: '',
    quantityName: 'Units',
};

export default memo(ItemCard);
