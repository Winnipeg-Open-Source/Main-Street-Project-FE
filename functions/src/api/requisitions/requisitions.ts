import express from 'express';
import { REQUISITIONS_COLLECTION } from '../../constants/collections';
import { update as updateLineItems } from '../../services/lineItems';
import { create } from '../../utils/firebase';

const router = express.Router();

router.post('/', async (req: any, res: any) => {
    const data = req.body;

    const requisition = await create(REQUISITIONS_COLLECTION, data);
    await updateLineItems(data.items, true);

    res.status(201);
    res.json(requisition);
});

export default router;
