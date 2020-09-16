import {
    CHANGE_EMPLOYEE,
    CHANGE_DESCRIPTION,
    ADD_SELECTED_ITEM,
    REMOVE_SELECTED_ITEM,
    CHANGE_ITEM_QUANTITY,
    changeEmployee,
    changeDescription,
    addSelectedItem,
    removeSelectedItem,
    changeItemQuantity,
} from './RequisitionForm';

describe ('Requisition Form', () => {
    it ('returns change employee action', () => {
        const response = changeEmployee(1);
        expect(response).toStrictEqual({ type: CHANGE_EMPLOYEE, employeeId: 1 });
    });

    it ('returns change description action', () => {
        const response = changeDescription('description');
        expect(response).toStrictEqual({ type: CHANGE_DESCRIPTION, description: 'description' });
    });

    it ('returns add selected item action', () => {
        const response = addSelectedItem('item');
        expect(response).toStrictEqual({ type: ADD_SELECTED_ITEM, item: 'item' });
    });

    it ('returns change item quantity action', () => {
        const response = changeItemQuantity(1, 2, 5);
        expect(response).toStrictEqual({
            type: CHANGE_ITEM_QUANTITY,
            itemId: 1,
            lineItemId: 2,
            quantity: 5,
        });
    });
});
