import {
    ADD_SELECTED_ITEM,
    REMOVE_SELECTED_ITEM,
    CHANGE_ITEM_QUANTITY,
} from 'actions/RequisitionForm';

function RequisitionForm (state = {}, action = {}) {
    switch (action.type) {
        case ADD_SELECTED_ITEM:
            return {
                ...state,
                selectedItems: [
                    ...state.selectedItems,
                    action.item,
                ],
            };

        case REMOVE_SELECTED_ITEM:
            return {
                ...state,
                selectedItems: state.selectedItems.filter(item => item.id !== action.id),
            };

        case CHANGE_ITEM_QUANTITY:
            return {
                ...state,
                selectedItems: state.selectedItems.map(item => item.id === action.itemId
                    ? {
                        ...item,
                        lineItems: item.lineItems.map(lineItem => lineItem.id === action.lineItemId
                            ? {
                                ...lineItem,
                                quantity: action.quantity,
                            }
                            : lineItem
                        ),
                    }
                    : item
                ),
            };
    }
}

export default RequisitionForm;
