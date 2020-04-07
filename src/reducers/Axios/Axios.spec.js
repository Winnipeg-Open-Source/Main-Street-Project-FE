import reducer from './Axios';
import { requestStart, requestFinished } from 'actions/Axios';

const initialState = { isLoading: false, name: 'test' };
const requestResponse = { data: { key: 'value' } };

const expectedFinishedResult = { isLoading: false, isError: false, name: 'test', data: { key: 'value' } };

describe ('Axios Reducer', () => {
    it ('returns initial state', () => {
        const response = reducer(initialState);
        expect(response).toStrictEqual({ isLoading: false, name: 'test' });
    });

    it ('returns request start state', () => {
        const response = reducer(initialState, requestStart());
        expect(response).toStrictEqual({ isLoading: true, name: 'test' });
    });

    it ('returns request finished state', () => {
        const response = reducer(initialState, requestStart());
        expect(response).toStrictEqual({ isLoading: true, name: 'test' });

        const secondResponse = reducer(response, requestFinished(requestResponse));
        expect(secondResponse).toStrictEqual(expectedFinishedResult);
    });
});
