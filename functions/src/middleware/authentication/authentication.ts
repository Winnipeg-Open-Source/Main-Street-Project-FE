// @ts-ignore
import jwt from 'jsonwebtoken';

const Authentication = async (req: any, res: any, next: any) => {
    const token = req.cookies.authToken;

    if (!token) {
        next();
        return;
    }

    try {
        const user = jwt.verify(token, 'ajbsadfjhasdf');
        res.locals.user = user;
        next();
    } catch (err) {
        res.status(400);
        res.json(err);
    }
};

export default Authentication;
