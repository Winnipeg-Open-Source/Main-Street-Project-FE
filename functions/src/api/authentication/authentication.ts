import * as firebase from 'firebase';
import * as firebaseAdmin from 'firebase-admin';
import express from 'express';

const router = express.Router();

const AUTH_COOKIE_NAME = 'authToken';
const ONE_WEEK = 60 * 60 * 1000 * 7;
const cookieOptions = { maxAge: ONE_WEEK, httpOnly: true, secure: true, sameSite: true };

router.post('/signUp', async (req: any, res: any) => {
    const { email, password, href } = req.body;

    try {
        const { user } = await firebase.auth().signInWithEmailLink(email, href);
        // @ts-ignore
        const customToken = await firebaseAdmin.auth().createCustomToken(user.uid);
        // @ts-ignore
        await user.updatePassword(password);
        res.status(200);
        res.cookie(AUTH_COOKIE_NAME, customToken, cookieOptions);
        res.json(user);
    } catch (err) {
        res.status(400);
        res.json({
            message: 'Error',
            err,
        });
    }
});

router.post('/login', async (req: any, res: any) => {
    const { email, password } = req.body;
    const currentUser = res.locals.user;

    if (currentUser) {
        res.json(currentUser);
    }

    try {
        const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
        // @ts-ignore
        const customToken = await firebaseAdmin.auth().createCustomToken(user.uid);
        res.cookie(AUTH_COOKIE_NAME, customToken, cookieOptions);
        res.json(user);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
});

router.post('/logout', (_, res: any) => {
    res.clearCookie(AUTH_COOKIE_NAME);
    res.clearCookie();
    res.status(200);
    res.json('Logged out.');
});

export default router;
