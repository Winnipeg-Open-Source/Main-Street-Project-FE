import reducer from './Donors';
import { loadDonors, saveDonor } from 'actions/Donors';

const initialState = { isLoading: true, isError: false, donors: [] };

describe ('Donors Reducer', () => {
    it ('returns default state', () => {
        const response = reducer();
        expect(response).toStrictEqual({});
    });

    it ('returns initial state', () => {
        const response = reducer(initialState);
        expect(response).toStrictEqual({ isLoading: true, isError: false, donors: [] });
    });

    it ('returns load donors state', () => {
        const response = reducer(initialState, loadDonors(false, false, [{ id: 1 }]));
        expect(response).toStrictEqual({ isLoading: false, isError: false, donors: [{ id: 1 }] });
    });

    it ('returns save donor state', () => {
        const response = reducer({ ...initialState, isLoading: false }, saveDonor({ id: 1 }));
        expect(response).toStrictEqual({ isLoading: false, isError: false, donors: [{ id: 1 }] });
    });
});
