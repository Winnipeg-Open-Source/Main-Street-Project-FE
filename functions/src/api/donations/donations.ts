import express from 'express';
import { DONATIONS_COLLECTION } from '../../constants/collections';
import { update as updateLineItems } from '../../services/lineItems';
import { create, get, getAll } from '../../utils/firebase';

const router = express.Router();

router.post('/', async (req: any, res: any) => {
    const data = req.body;

    const donation = await create(DONATIONS_COLLECTION, data);
    await updateLineItems(data.items, true);

    res.status(201);
    res.json(donation);
});

router.get('/:id', async (req: any, res: any) => {
    const donationId:string = req.params.id;
    const donation = await get(DONATIONS_COLLECTION, donationId);

    res.status(200);
    res.json(donation);
})

router.get('/', async (req: any, res: any) => {
    const donations = await getAll(DONATIONS_COLLECTION);

    res.status(200);
    res.json(donations);
})

router.post('/search', async (req: any, res: any) => {

    // body: JSON.stringify(
    //     {
    //         searchTerm: '######'
    //     }
    // )

    const value = req.body.searchTerm;

    const filters = [
        {key: 'title', match: '>=', value: value.toUpperCase()},
        {key: 'title', match: '<=', value: value.toLowerCase()}
    ]

    const donations = await getAll(DONATIONS_COLLECTION, filters)

    res.status(200);
    res.json(donations);
})

export default router;
