import { LINE_ITEMS_COLLECTION } from '../../constants/collections';
import { createMany as dbCreateMany, getAll, transaction } from '../../utils/firebase';

export const createMany = async (itemId: string, lineItems: any) => {
    const data = lineItems.map((lineItem: any) => ({ itemId, ...lineItem }));
    return await dbCreateMany(LINE_ITEMS_COLLECTION, data);
};

export const update = async (items: any, additive: boolean) => {
    return await Promise.all(items.map(async (item: any) => {
        const lineItems = item.lineItems;
        
        await Promise.all(lineItems.map(async (lineItem: any) => {
            const { id, quantity } = lineItem;

            const delta = additive ? quantity : -quantity;
            await transaction(LINE_ITEMS_COLLECTION, id, delta);
        }));
    }));
};

export const getByItemId = async (itemId: string) => {
    const filters = [
        {
            key: 'itemId',
            match: '==',
            value: itemId,
        },
    ];

    return await getAll(LINE_ITEMS_COLLECTION, filters);
};
