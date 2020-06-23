import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ItemsContext from 'context/Items';
import useLoadResources from 'hooks/useLoadResources';
import { ITEMS_API_PATH } from 'constants/api';

function ItemsProvider ({ children }) {
    const { isLoading, isError, data: items, fetchData } = useLoadResources(ITEMS_API_PATH);

    useEffect(() => {
        fetchData();
    }, []);

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