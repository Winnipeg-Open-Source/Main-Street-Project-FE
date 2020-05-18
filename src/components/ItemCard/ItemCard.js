import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import Collapse from 'components/Collapse';
import LineItemCard from 'components/LineItemCard';

function ItemCard ({ className, name, quantityName, lineItems }) {
    const totalQuantity = useMemo(() => lineItems.reduce((quantity, lineItem) => quantity + lineItem.quantity, 0), [lineItems]);
    const title = `${name} (${totalQuantity} ${quantityName})`;

    return (
        <Collapse className={className} title={title} alignItems='center' row>
            {lineItems && lineItems.map(lineItem => (
                <LineItemCard {...lineItem} quantityName={quantityName} />
            ))}
        </Collapse>
    );
}

ItemCard.displayName = 'ItemCard';

ItemCard.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    quantityName: PropTypes.string,
    lineItems: PropTypes.shape({
        id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
        locationName: PropTypes.string,
        quantity: PropTypes.number,
    }),
};

ItemCard.defaultProps = {
    className: '',
    quantityName: 'Units',
};

export default memo(ItemCard);
