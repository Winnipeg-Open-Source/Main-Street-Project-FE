export const CHANGE_DONOR = 'CHANGE_DONOR';
export const CHANGE_TITLE = 'CHANGE_TITLE';
export const CHANGE_DESCRIPTION = 'CHANGE_DESCRIPTION';
export const ADD_SELECTED_ITEM = 'ADD_SELECTED_ITEM';
export const CHANGE_ITEM_QUANTITY = 'CHANGE_ITEM_QUANTITY';
export const CHANGE_NOTES = 'CHANGE_NOTES';

export const changeDonor = (donorId) => ({ type: CHANGE_DONOR, donorId });
export const changeTitle = (title) => ({ type: CHANGE_TITLE, title });
export const changeDescription = (description) => ({
    type: CHANGE_DESCRIPTION,
    description,
});
export const changeNotes = (notes) => ({ type: CHANGE_NOTES, notes });

export const addSelectedItem = (item) => ({ type: ADD_SELECTED_ITEM, item });
export const changeItemQuantity = (itemId, lineItemId, quantity) => ({
    type: CHANGE_ITEM_QUANTITY,
    itemId,
    lineItemId,
    quantity,
});
