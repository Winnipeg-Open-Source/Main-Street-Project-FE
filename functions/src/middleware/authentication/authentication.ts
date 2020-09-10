import { verify } from '../../utils/jwt';

const Authentication = async (req: any, res: any, next: any) => {
    const sessionCookie = req?.cookies?.__session;
    const parsedCookie = sessionCookie && JSON.parse(sessionCookie);
    const authToken = parsedCookie?.authToken;

    if (!authToken) {
        next();
        return;
    }

    try {
        const user = verify(authToken);
        res.locals.user = user;
        res.set('Cache-control', 'private');
        next();
    } catch (err) {
        res.status(400);
        res.json(err);
    }
};

export default Authentication;
