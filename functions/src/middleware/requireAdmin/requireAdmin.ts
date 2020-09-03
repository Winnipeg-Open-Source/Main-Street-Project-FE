import * as firebaseAdmin from 'firebase-admin';
// @ts-ignore
import jwt from 'jsonwebtoken';

const RequireAdmin = async (req: any, res: any, next: any) => {
    const user = res.locals.user;

    try {
        const userRecord = await firebaseAdmin.auth().getUser(user.uid);
        const isAdmin = userRecord?.customClaims?.isAdmin;

        if (isAdmin) {
            next();
        } else {
            if (user.isAdmin) {
                const token = jwt.sign({ uid: user.uid, isAdmin }, 'ajbsadfjhasdf');
                res.cookie('authToken', token);
            }

            res.status(401);
            res.json('Unauthorized.');
        }
    } catch (err) {

    }
};

export default RequireAdmin;
