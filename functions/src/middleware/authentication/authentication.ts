import * as firebase from 'firebase';
import * as admin from 'firebase-admin';

const Authentication = async (req: any, res: any, next: any) => {
    const accessToken = req.cookies.auth?.accessToken || '';
    const authToken = req.cookies.auth?.authToken || '';

    const user = await firebase.auth().signInWithCustomToken(authToken);
    res.locals.user = user;
    next();
};

export default Authentication;
