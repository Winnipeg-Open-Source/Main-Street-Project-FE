// @ts-ignore
import jwt from 'jsonwebtoken';
import config from '../config';

const jwtSecret = config.jwt.secret;

export const sign = (data: object) => {
    return jwt.sign(data, jwtSecret);
};

export const verify = (token: string) => {
    return jwt.verify(token, jwtSecret);
};
