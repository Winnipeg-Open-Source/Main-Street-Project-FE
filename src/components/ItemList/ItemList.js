import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'pcln-design-system';
import List from 'components/List';
import ItemCard from 'components/ItemCard';

function ItemList ({ className, showEmpty, items, onItemQuantityChange }) {
    return (
        <List className={className}>
            {items && items.length > 0
                ? items.map(item => (
                    <ItemCard
                        key={item.id}
                        {...item}
                        onItemQuantityChange={onItemQuantityChange}
                    />
                ))
                : showEmpty && <Text textAlign='center'>No items yet...</Text>
            }
        </List>
    );
}

ItemList.displayName = 'ItemList';

ItemList.propTypes = {
    className: PropTypes.string,
    showEmpty: PropTypes.bool,
    items: PropTypes.array,
    onItemQuantityChange: PropTypes.func,
};

ItemList.defaultProps = {
    className: '',
};

export default memo(ItemList);
