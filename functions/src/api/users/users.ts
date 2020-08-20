import * as firebase from 'firebase';
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

export default router;
