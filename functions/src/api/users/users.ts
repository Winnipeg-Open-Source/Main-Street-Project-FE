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
        try {
            await firebaseAdmin.auth().getUserByEmail(email);
            res.status(400);
            res.json(`${email} already belongs to a user.`);
            return;
        } catch (err) {}

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
    const { isAdmin } = req.body;

    try {
        await firebaseAdmin.auth().setCustomUserClaims(id, { isAdmin: isAdmin });
        res.json({
            id,
            isAdmin,
        });
    } catch (err) {
        res.status(404);
        res.json(err);
    }
});

router.get('/', async (req: any, res: any) => {
    try {
        const listUsersResult = await firebaseAdmin.auth().listUsers();
        const users = listUsersResult && listUsersResult.users.map(user => {
            const userJSON = user.toJSON();
            const isAdmin = userJSON?.customClaims?.isAdmin;

            return {
                ...userJSON,
                id: userJSON?.uid,
                isAdmin,
            };
        });

        res.json(users);
    } catch (err) {
        res.status(404);
        res.json(err);
    }
});

export default router;
