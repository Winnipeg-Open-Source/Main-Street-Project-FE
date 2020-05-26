export const CHANGE_EMPLOYEE = 'CHANGE_EMPLOYEE';
export const CHANGE_DESCRIPTION = 'CHANGE_DESCRIPTION';
export const ADD_SELECTED_ITEM = 'ADD_SELECTED_ITEM';
export const REMOVE_SELECTED_ITEM = 'REMOVE_SELECTED_ITEM';
export const CHANGE_ITEM_QUANTITY = 'CHANGE_ITEM_QUANTITY';

export const changeEmployee = (employeeId) => ({ type: CHANGE_EMPLOYEE, employeeId });

export const changeDescription = (description) => ({ type: CHANGE_DESCRIPTION, description });

export const addSelectedItem = (item) => ({ type: ADD_SELECTED_ITEM, item });

export const removeSelectedItem = (id) => ({ type: REMOVE_SELECTED_ITEM, id });

export const changeItemQuantity = (itemId, lineItemId, quantity) => ({
    type: CHANGE_ITEM_QUANTITY,
    itemId,
    lineItemId,
    quantity,
});
