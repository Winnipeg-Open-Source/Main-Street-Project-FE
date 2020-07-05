import React, { memo } from 'react';
import PropTypes from 'prop-types';
import List from 'components/List';
import ItemCard from 'components/ItemCard';

function ItemListSkeleton ({ className }) {
    return (
        <List className={className}>
            <ItemCard isLoading />
            <ItemCard isLoading />
            <ItemCard isLoading />
        </List>
    );
}

ItemListSkeleton.displayName = 'ItemListSkeleton';

ItemListSkeleton.propTypes = {
    className: PropTypes.string,
};

ItemListSkeleton.defaultProps = {
    className: '',
};

export default memo(ItemListSkeleton);
