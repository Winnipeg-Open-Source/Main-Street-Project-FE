import * as firebase from 'firebase-admin';
import express from 'express';
// @ts-ignore
import { createTransport, createTestAccount } from 'nodemailer';

const router = express.Router();

const actionCodeSettings = {
    url: 'https://main-street-project-qa.web.app/signUp',
    handleCodeInApp: true,
};

router.get('/users', async (req: any, res: any) => {
    console.log('got')
    const { email } = req.body;

    const testAccount = await createTestAccount();
    const transporter = createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass,
        },
    });

    try {
        const link = await firebase.auth().generateSignInWithEmailLink(email, actionCodeSettings);
        const info = await transporter.sendMail({
            from: '"Fred Foo 👻" <foo@example.com>',
            to: "jamesstewart94.300@gmail.com",
            subject: "Hello ✔",
            text: "Hello world?",
            html: `<div><b>Hello world?</b><a href=${link}>${link}</a></div>`,
        })
        res.json({
            message: `Sent sign up email to: ${email}`,
            error: false,
            info,
        });
    } catch (err) {
        res.status(401);
        res.json({
            message: 'Failed to send sign up email.',
            error: true,
        });
    }
});

router.post('/signUp', async (req: any, res: any) => {
    const { email } = req.body;

    try {
        // await firebase.auth().signInWithEmailLink(email, href);
        res.json({ mesasge: `${email} is valid. Signing in.` });
    } catch (err) {
        res.status(401);
        res.json({
            message: 'Failed email match.',
            error: true,
        });
    }
});

// router.post('/login', async (req: any, res: any) => {
//     const { email, password } = req.body;
//     auth().createUser()
// });

// router.post('logout', (req: any, res: any) => {
//     auth();
// });

export default router;
