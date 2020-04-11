import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import List from 'components/List';
import ItemCard from 'components/ItemCard';

function ItemList ({ className, items, onDeleteClick }) {
    return items
        ? (
            <List className={className}>
                {items.map(item => {
                    const handleDeleteClick = useCallback(() => onDeleteClick(item.id), [item]);

                    return (
                        <ItemCard key={item.id} {...item} onDeleteClick={handleDeleteClick} />
                    );
                })}
            </List>
        )
        : null;
}

ItemList.displayName = 'ItemList';

ItemList.propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
};

ItemList.defaultProps = {
    className: '',
};

export default memo(ItemList);
