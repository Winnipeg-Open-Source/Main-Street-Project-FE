import reducer from './Resources';
import { loadResources, saveResource } from 'actions/Resources';

const initialState = { isLoading: true, isError: false, data: [] };

describe('Resources Reducer', () => {
    it('returns default state', () => {
        const response = reducer();
        expect(response).toStrictEqual({});
    });

    it('returns initial state', () => {
        const response = reducer(initialState);
        expect(response).toStrictEqual({
            isLoading: true,
            isError: false,
            data: [],
        });
    });

    it('returns load donors state', () => {
        const response = reducer(
            initialState,
            loadResources(false, false, [{ id: 1 }])
        );
        expect(response).toStrictEqual({
            isLoading: false,
            isError: false,
            data: [{ id: 1 }],
        });
    });

    it('returns save donor state', () => {
        const response = reducer(
            { ...initialState, isLoading: false },
            saveResource({ id: 1 })
        );
        expect(response).toStrictEqual({
            isLoading: false,
            isError: false,
            data: [{ id: 1 }],
        });
    });
});
