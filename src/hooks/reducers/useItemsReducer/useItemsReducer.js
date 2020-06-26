import { useCallback, useEffect, useReducer } from 'react';
import ItemsReducer from 'reducers/Items';
import { initialContext } from 'context/Items';
import useLoadResources from 'hooks/useLoadResources';
import { loadItems, saveItem } from 'actions/Items';
import { ITEMS_API_PATH } from 'constants/api';

function useItemsReducer () {
    const [ state, dispatch ] = useReducer(ItemsReducer, initialContext);
    const { isLoading, isError, data: items, fetchData } = useLoadResources(ITEMS_API_PATH);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        dispatch(loadItems(isLoading, isError, items));
    }, [isLoading, isError, items]);

    const onSaveItem = useCallback((item) => dispatch(saveItem(item)), [dispatch, saveItem]);

    return {
        ...state,
        onSaveItem,
    };
}

export default useItemsReducer;
