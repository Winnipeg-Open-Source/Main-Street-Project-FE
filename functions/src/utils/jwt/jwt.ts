// @ts-ignore
import jwt from 'jsonwebtoken';

const jwtSecret = 'ajbsadfjhasdf';

export const sign = (data: object) => {
    return jwt.sign(data, jwtSecret);
};

export const verify = (token: string) => {
    return jwt.verify(token, jwtSecret);
};
