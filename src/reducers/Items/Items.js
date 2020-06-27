import { LOAD_ITEMS, SAVE_ITEM } from 'actions/Items';

function ItemsReducer (state = {}, action = {}) {
    switch (action.type) {
        case LOAD_ITEMS:
            return {
                isLoading: action.isLoading,
                isError: action.isError,
                items: action.items,
            };

        case SAVE_ITEM:
            return {
                ...state,
                items: [
                    ...state.items,
                    action.item,
                ],
            };

        default:
            return state;
    }
}

export default ItemsReducer;
