import { LINE_ITEMS_COLLECTION } from '../../constants/collections';
import { createMany as dbCreateMany, getAll } from '../../utils/firebase';

export const createMany = async (itemId: string, lineItems: any) => {
    const data = lineItems.map((lineItem: any) => ({ itemId, ...lineItem }));
    return await dbCreateMany(LINE_ITEMS_COLLECTION, data);
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
