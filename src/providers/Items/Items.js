import React from 'react';
import PropTypes from 'prop-types';
import ItemsContext from 'context/Items';
import useItemsReducer from 'hooks/reducers/useItemsReducer';

function ItemsProvider ({ children }) {
    const itemsProps = useItemsReducer();

    return (
        <ItemsContext.Provider value={itemsProps}>
            {children}
        </ItemsContext.Provider>
    );
}

ItemsProvider.displayName = 'ItemsProvider';

ItemsProvider.propTypes = {
    children: PropTypes.node,
};

export default ItemsProvider;