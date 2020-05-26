import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ItemsContext from 'context/Items';
import useLoadItems from 'hooks/useLoadItems';

function ItemsProvider ({ children }) {
    const { isLoading, isError, items, fetchData } = useLoadItems();

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const props = {
        isLoading,
        isError,
        items,
    };

    return (
        <ItemsContext.Provider value={props}>
            {children}
        </ItemsContext.Provider>
    );
}

ItemsProvider.displayName = 'ItemsProvider';

ItemsProvider.propTypes = {
    children: PropTypes.node,
};

export default ItemsProvider;