import {
    CHANGE_DONOR,
    CHANGE_TITLE,
    CHANGE_DESCRIPTION,
    ADD_SELECTED_ITEM,
    CHANGE_ITEM_QUANTITY,
    CHANGE_NOTES,
    changeDonor,
    changeTitle,
    changeDescription,
    addSelectedItem,
    changeItemQuantity,
    changeNotes,
} from './DonationForm';

describe ('Donation Form', () => {
    it ('returns change donor action', () => {
        const response = changeDonor(1);
        expect(response).toStrictEqual({ type: CHANGE_DONOR, donorId: 1 });
    });

    it ('returns change title action', () => {
        const response = changeTitle('title');
        expect(response).toStrictEqual({ type: CHANGE_TITLE, title: 'title' });
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
            quantity: 5
        });
    });

    it ('returns change notes action', () => {
        const response = changeNotes('notes');
        expect(response).toStrictEqual({ type: CHANGE_NOTES, notes: 'notes' });
    });
});
