import express from 'express';
import { ITEMS_COLLECTION } from '../../constants/collections';
import { create, get, getAll } from '../../utils/firestore';
import { createMany, getByItemId } from '../../services/lineItems';

const router = express.Router();

router.post('/', async (req: any, res: any) => {
    const { lineItems, ...data } = req.body;

    const item = await create(ITEMS_COLLECTION, data);
    const lineItemsRepsonse = await createMany(item.id, lineItems);

    res.status(201);
    res.json({
        ...item,
        lineItems: lineItemsRepsonse,
    });
});

router.get('/:id', async (req: any, res: any) => {
    const id: string = req.params.id;
    const item = await get(ITEMS_COLLECTION, id);
    const lineItems = await getByItemId(id);

    res.status(200);
    res.json({
        ...item,
        lineItems,
    });
});

router.get('/', async (req: any, res: any) => {
    try {
        const items = await getAll(ITEMS_COLLECTION);
        const response = await Promise.all(items.map(async (item: any) => {
            const lineItems = await getByItemId(item.id);
            return {
                ...item,
                lineItems,
            };
        }));

        res.status(200);
        res.json(response);
    } catch (err) {
        res.json(err);
    }
});

export default router;
