import React from 'react';
import PropTypes from 'prop-types';
import ItemsContext from 'context/Items';
import useResourcesReducer from 'hooks/reducers/useResourcesReducer';
import { ITEMS_API_PATH } from 'constants/api';

function ItemsProvider ({ children }) {
    const { isLoading, isError, data, onSave, onLoad } = useResourcesReducer(ITEMS_API_PATH);

    const props = {
        isLoading,
        isError,
        items: data,
        onSaveItem: onSave,
        onLoadItems: onLoad,
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