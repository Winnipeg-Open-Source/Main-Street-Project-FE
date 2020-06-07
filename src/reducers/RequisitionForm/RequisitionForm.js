import {
    CHANGE_EMPLOYEE,
    CHANGE_DESCRIPTION,
    ADD_SELECTED_ITEM,
    CHANGE_ITEM_QUANTITY,
} from 'actions/RequisitionForm';

function RequisitionForm (state = {}, action = {}) {
    switch (action.type) {
        case CHANGE_EMPLOYEE:
            return {
                ...state,
                employeeId: action.employeeId,
            };

        case CHANGE_DESCRIPTION:
            return {
                ...state,
                description: action.description,
            };

        case ADD_SELECTED_ITEM:
            return {
                ...state,
                selectedItems: [
                    ...state.selectedItems,
                    action.item,
                ],
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
