export const LOAD_ITEMS = 'LOAD_ITEMS';
export const SAVE_ITEM = 'SAVE_ITEM';

export const loadItems = (isLoading, isError, items) => ({
    type: LOAD_ITEMS,
    isLoading,
    isError,
    items,
});

export const saveItem = (item) => ({
    type: SAVE_ITEM,
    item,
});
