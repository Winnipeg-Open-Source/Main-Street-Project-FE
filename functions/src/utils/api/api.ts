import express from 'express';
import {
    create,
    update,
    get as dbGet,
    getAll as dbGetAll,
    deleteOne as dbDeleteOne
} from '../firebase';

export const post = async (collection: string, req: any, res: any) => {
    const data = req.body;
    const response = await create(collection, data);

    res.status(201);
    res.json(response);
};

export const put = async (collection: string, req: any, res: any) => {
    try {
        const { id, ...data } = req.body;
        const response = await update(collection, id, data);
        res.json(response);
    } catch (err) {
        if (err.code === 'not-found') {
            res.status(404).send('Resource not found.');
        } else {
            res.status(500).send('Internal Server Error');
        }
    }
};

export const get = async (collection: string, req: any, res: any) => {
    const id: string = req.params.id;
    const response = await dbGet(collection, id);

    if (!response) {
        res.status(404).send('Resource not found.');
    } else {
        res.json(response);
    }
};

export const getAll = async (collection: string, req: any, res: any) => {
    try {
        const response = await dbGetAll(collection);
        res.json(response);
    } catch (err) {
        res.json(err);
    }
};

export const deleteOne = async (collection: string, req: any, res: any) => {
    const id = req.params.id;
    await dbDeleteOne(collection, id);
    res.send('Resource deleted.');
};

export const getRouter = (collection: string) => {
    const router = express.Router();

    router.post('/', async (req: any, res: any) => post(collection, req, res));
    router.put('/', async (req: any, res: any) => put(collection, req, res));
    router.get('/', async (req: any, res: any) => getAll(collection, req, res));
    router.get(`/:id`, async (req: any, res: any) => get(collection, req, res));
    router.delete(`/:id`, async (req: any, res: any) => deleteOne(collection, req, res));

    return router;
};
