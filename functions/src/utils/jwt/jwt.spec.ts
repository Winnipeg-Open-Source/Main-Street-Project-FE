// @ts-ignore
import jwt from 'jsonwebtoken';
import { sign, verify } from './jwt';

jest.mock('jsonwebtoken', () => ({ sign: jest.fn(), verify: jest.fn() }));
jest.mock('../config', () => ({ jwt: { secret: 'abcde' } }));

describe ('jwt', () => {
    it ('sign successfully', () => {
        jwt.sign.mockReturnValue('abc');

        const data = { test: true };
        const token = sign(data);

        expect(jwt.sign).toHaveBeenCalledWith(data, 'abcde');
        expect(token).toBe('abc');
    });

    it ('verify successfully', () => {
        jwt.verify.mockReturnValue({ test: true });

        const data = verify('abc');
        expect(data).toStrictEqual({ test: true });
    });
})
