import * as firebase from 'firebase';
import express from 'express';
// @ts-ignore
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/signUp', async (req: any, res: any) => {
    const { email, password } = req.body;

    try {
        const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const token = jwt.sign({ uid: user?.uid }, 'ajbsadfjhasdf');
        res.cookie('authToken', token);
        res.json(user);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
});

router.post('/login', async (req: any, res: any) => {
    const { email, password } = req.body;
    const currentUser = res.locals.user;

    if (currentUser) {
        res.json(currentUser);
        return;
    }

    try {
        const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
        const token = jwt.sign({ uid: user?.uid }, 'ajbsadfjhasdf');
        res.cookie('authToken', token);
        res.json(user);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
});

router.post('/logout', async (_, res: any) => {
    await firebase.auth().signOut();
    res.clearCookie('authToken');
    res.json('Logged out.');
});

export default router;
