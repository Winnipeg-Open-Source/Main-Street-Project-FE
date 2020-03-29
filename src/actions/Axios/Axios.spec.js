import {
    REQUEST_START,
    requestStart,
} from './Axios';

describe ('Axios Actions', () => {
    it ('returns request start action type', () => {
        const response = requestStart();
        expect(response).toStrictEqual({ type: REQUEST_START });
    });
});
