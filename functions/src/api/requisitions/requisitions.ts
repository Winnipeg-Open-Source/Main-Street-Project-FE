import express from 'express';
import { REQUISITIONS_COLLECTION } from '../../constants/collections';
import { update as updateLineItems } from '../../services/lineItems';
import { create, get, getAll } from '../../utils/firestore';

const router = express.Router();

router.post('/', async (req: any, res: any) => {
    const data = req.body;

    const requisition = await create(REQUISITIONS_COLLECTION, data);
    await updateLineItems(data.items, true);

    res.status(201);
    res.json(requisition);
});

router.get('/:id', async (req: any, res: any) => {
    const id: string = req.params.id;
    const requisition = await get(REQUISITIONS_COLLECTION, id);

    res.status(200);
    res.json(requisition);
});

router.get('/', async (req: any, res: any) => {
    const requisitions = await getAll(REQUISITIONS_COLLECTION);

    res.status(200);
    res.json(requisitions);
});

export default router;
