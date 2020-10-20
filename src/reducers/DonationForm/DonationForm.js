import {
    CHANGE_DONOR,
    CHANGE_TITLE,
    CHANGE_DESCRIPTION,
    CHANGE_NOTES,
    ADD_SELECTED_ITEM,
    CHANGE_ITEM_QUANTITY,
} from 'actions/DonationForm';

function DonationForm (state = {}, action = {}) {
    switch (action.type) {
        case CHANGE_DONOR:
            return {
                ...state,
                donorId: action.donorId,
            };

        case CHANGE_TITLE:
            return {
                ...state,
                title: action.title,
            };

        case CHANGE_DESCRIPTION:
            return {
                ...state,
                description: action.description,
            };

        case CHANGE_NOTES:
            return {
                ...state,
                notes: action.notes,
            };

        case ADD_SELECTED_ITEM:
            return {
                ...state,
                selectedItems: [...state.selectedItems, action.item],
            };

        case CHANGE_ITEM_QUANTITY:
            return {
                ...state,
                selectedItems: state.selectedItems.map((item) =>
                    item.id === action.itemId
                        ? {
                              ...item,
                              lineItems: item.lineItems.map((lineItem) =>
                                  lineItem.id === action.lineItemId
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

export default DonationForm;
