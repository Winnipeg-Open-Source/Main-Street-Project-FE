import * as firebase from 'firebase';
import * as firebaseAdmin from 'firebase-admin';
import express from 'express';

const actionCodeSettings = {
    url: 'https://main-street-project-qa.web.app/signUp',
    handleCodeInApp: true,
};

const router = express.Router();

router.post('/', async (req: any, res: any) => {
    const { email } = req.body;

    try {
        await firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings);
        res.status(201);
        res.json(`Email sent to ${email}`);
    } catch (err) {
        res.status(400);
        res.json(err)
    }
});

router.put('/:id', async (req: any, res: any) => {
    const id: string = req.params.id;
    const { permissions } = req.body;

    try {
        await firebaseAdmin.auth().updateUser(id, {
            permissions,
        });
    } catch (err) {
        res.status(404);
        res.json(err);
    }
});

router.get('/', async (req: any, res: any) => {
    try {
        const listUsersResult = await firebaseAdmin.auth().listUsers();
        const users = listUsersResult && listUsersResult.users.map(user => user.toJSON());

        res.json(users);
    } catch (err) {
        res.status(404);
        res.json(err);
    }
});

export default router;
