import express from 'express';
import { REQUISITIONS_COLLECTION, LINE_ITEMS_COLLECTION } from '../../constants/collections';
// import { getRouter } from '../../utils/api';
import { create, transaction } from '../../utils/firebase';

const router = express.Router();

router.post('/', async (req: any, res: any) => {
    const data = req.body;

    const requisition = await create(REQUISITIONS_COLLECTION, data);
    Promise.all(data.items.map(async (item: any) => {
        const lineItems = item.lineItems;
        
        Promise.all(lineItems.map(async (lineItem: any) => {
            const { id, quantity } = lineItem;

            await transaction(LINE_ITEMS_COLLECTION, id, -quantity);
        }));
    }));

    res.status(201);
    res.json(requisition);
});

export default router;

// export default getRouter(REQUISITIONS_COLLECTION);
