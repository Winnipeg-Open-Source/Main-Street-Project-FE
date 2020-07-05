import React, { memo } from 'react';
import PropTypes from 'prop-types';
import List from 'components/List';
import ItemCard from 'components/ItemCard';

function ItemList ({ className, items, onItemQuantityChange }) {
    return (
        <List className={className}>
            {items && items.map(item => (
                <ItemCard
                    key={item.id}
                    {...item}
                    onItemQuantityChange={onItemQuantityChange}
                />
            ))}
        </List>
    );
}

ItemList.displayName = 'ItemList';

ItemList.propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
    onItemQuantityChange: PropTypes.func,
};

ItemList.defaultProps = {
    className: '',
};

export default memo(ItemList);
