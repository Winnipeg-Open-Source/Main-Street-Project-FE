import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Collapse from 'components/Collapse';
import LineItemCard from 'components/LineItemCard';

function ItemCard ({ className, name, quantityName, lineItems, onDeleteClick }) {
    return (
        <Collapse className={className} title={name} alignItems='center' row>
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
    onDeleteClick: PropTypes.func,
};

ItemCard.defaultProps = {
    className: '',
};

export default memo(ItemCard);
