import * as firebaseAdmin from 'firebase-admin';
import { sign } from '../../utils/jwt';

const RequireAdmin = async (req: any, res: any, next: any) => {
    try {
        const user = res?.locals?.user;
        const userRecord = await firebaseAdmin.auth().getUser(user?.uid || '');
        const isAdmin = userRecord?.customClaims?.isAdmin;

        if (!!isAdmin) {
            next();
        } else {
            if (user.isAdmin) {
                const token = sign({ uid: user?.uid, isAdmin });
                const session = JSON.stringify({ authToken: token });
                res.cookie('__session', session);
            }

            res.status(401);
            res.json('Unauthorized.');
        }
    } catch (err) {
        const user = res?.locals?.user;
        res.status(500);
        res.json({ ...err, ...user });
    }
};

export default RequireAdmin;
