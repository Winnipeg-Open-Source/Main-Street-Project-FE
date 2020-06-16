import express from 'express';
import { DONATIONS_COLLECTION } from '../../constants/collections';
import { update as updateLineItems } from '../../services/lineItems';
import { create } from '../../utils/firebase';

const router = express.Router();

router.post('/', async (req: any, res: any) => {
    const data = req.body;

    const donation = await create(DONATIONS_COLLECTION, data);
    await updateLineItems(data.items, true);

    res.status(201);
    res.json(donation);
});

export default router;
