import * as firebase from 'firebase';
import * as firebaseAdmin from 'firebase-admin';
import express from 'express';
import { sign } from '../../utils/jwt';

const router = express.Router();

router.post('/signUp', async (req: any, res: any) => {
    const { email, password } = req.body;

    try {
        const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const token = sign({ uid: user?.uid, isAdmin: false });
        const session = JSON.stringify({ authToken: token });
        res.cookie('__session', session);
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
        const userRecord = await firebaseAdmin.auth().getUser(user?.uid || '');
        const isAdmin = userRecord?.customClaims?.isAdmin;

        const token = sign({ uid: user?.uid, isAdmin });
        const session = JSON.stringify({ authToken: token });
        res.cookie('__session', session);
        res.json({
            ...user?.toJSON(),
            isAdmin,
        });
    } catch (err) {
        res.status(400);
        res.json(err);
    }
});

router.post('/logout', async (_, res: any) => {
    await firebase.auth().signOut();
    res.clearCookie('__session');
    res.json('Logged out.');
});

export default router;
